"use client";
import styles from "./page.module.css";
import Navbar from "./component/navbar/navbar";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon, Stack,
  Typography,
  useTheme
} from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import CircleIcon from "@mui/icons-material/Circle";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';

const tech_stack = [
  {
    tech_name: "Html",
    tech_img: "/img/tech_stack/html.png",
  },
  {
    tech_name: "CSS",
    tech_img: "/img/tech_stack/css.png",
  },
  {
    tech_name: "React",
    tech_img: "/img/tech_stack/react.png",
  },
  {
    tech_name: "Next.js",
    tech_img: "/img/tech_stack/next.png",
  },
  {
    tech_name: "Node.js",
    tech_img: "/img/tech_stack/nodejs.png",
  },
  {
    tech_name: "Laravel",
    tech_img: "/img/tech_stack/laravel.png",
  },
  {
    tech_name: "Material-ui",
    tech_img: "/img/tech_stack/material-ui.png",
  },
  {
    tech_name: "Bootstrap",
    tech_img: "/img/tech_stack/bootstrap.png",
  },
  {
    tech_name: "MySQL",
    tech_img: "/img/tech_stack/mysql.png",
  },
  {
    tech_name: "PostgreSQL",
    tech_img: "/img/tech_stack/postgresql.png",
  },
  {
    tech_name: "Redis",
    tech_img: "/img/tech_stack/redis.png",
  },
  {
    tech_name: "Docker",
    tech_img: "/img/tech_stack/docker.png",
  },
];

export default function Home() {
  const theme = useTheme();
  return (
    <div>
      <Navbar></Navbar>
      <section className={styles.container} style={{ marginTop: "3rem" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Stack
            direction={{ sm: "column", md: "column", lg: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img className={styles.heroImg} alt="me" src="/img/me.png"></img>
            <Box
              sx={{ order: 1 }}
              display={"flex"}
              alignContent={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Typography
                fontSize={"4.5rem"}
                fontWeight={"700"}
                sx={{
                  background:
                    "-webkit-linear-gradient(90deg, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0) 120%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {"Hi, I'm Karit"}
              </Typography>
              <TypeAnimation
                sequence={[
                  "I'm a Full Stack Developer ",
                  4000,
                  "I'm a Web Developer ",
                  4000,
                  "I'm a System Analyst ",
                  4000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "3rem",
                  color: "white",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
              <Typography
                style={{
                  color: "white",
                  fontWeight: "300",
                  fontSize: "1.875rem",
                }}
              >
                with 1 years of experience using React and NodeJS. Reach out if
                you’d like to learn more!
              </Typography>
              <a href="/resume.pdf">
                <Button
                  variant="contained"
                  sx={{
                    width: "25%",
                    alignSelf: { sm: "center", md: "center", lg: "start" },
                    borderRadius: "30px",
                    mt: "1rem",
                  }}
                >
                  <Typography
                    py={0.5}
                    px={0.5}
                    fontSize={"30px"}
                    fontWeight={"600"}
                  >
                    Resume
                  </Typography>
                </Button>
              </a>
            </Box>
          </Stack>
        </div>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
      <section id="about" className={styles.container} style={{ marginTop: "10rem" }}>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            backgroundColor: "rgba(12, 12, 12, 0.6)",
            borderRadius: "15px",
          }}
        >
          <Box px={5} py={5}>
            <Typography fontSize={"35px"} fontWeight={"500"} color={"#fff"}>
              ABOUT
            </Typography>
            <Stack direction={"row"} mt={1} spacing={6}>
              <Box
                sx={{
                  [theme.breakpoints.down("lg")]: {
                    display: "none",
                  },
                }}
              >
                <img
                  alt="bg_about"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "15px",
                  }}
                  src="/img/bg_about.avif"
                ></img>
              </Box>
              <Stack direction={"column"} spacing={2} width={"60%"}>
                <div className={styles.aboutItem}>
                  <Box flexDirection={"row"} display={"flex"} columnGap={3}>
                    <img
                      alt="frontend"
                      style={{
                        width: "70px",
                        height: "70px",
                        alignSelf: "center",
                      }}
                      src="/img/frontend.png"
                    ></img>
                    <Box>
                      <Typography
                        fontSize={"25px"}
                        fontWeight={"500"}
                        color={"#fff"}
                      >
                        Frontend Developer
                      </Typography>
                      <Typography
                        fontSize={"25px"}
                        fontWeight={"300"}
                        color={"#fff"}
                        sx={{ wordBreak: "break-word" }}
                      >
                        I&apos;m a front-end developer with experience in creating
                        high-quality responsive websites
                      </Typography>
                    </Box>
                  </Box>
                </div>
                <div className={styles.aboutItem}>
                  <Box flexDirection={"row"} display={"flex"} columnGap={3}>
                    <img
                      alt="backend"
                      style={{
                        width: "70px",
                        height: "70px",
                        alignSelf: "center",
                      }}
                      src="/img/backend.png"
                    ></img>
                    <Box>
                      <Typography
                        fontSize={"25px"}
                        fontWeight={"500"}
                        color={"#fff"}
                      >
                        Backend Developer
                      </Typography>
                      <Typography
                        fontSize={"25px"}
                        fontWeight={"300"}
                        color={"#fff"}
                      >
                        I&apos;m a backend developer with experience in creating APIs
                        and optimizing systems for speed and stability
                      </Typography>
                    </Box>
                  </Box>
                </div>
                <div className={styles.aboutItem}>
                  <Box flexDirection={"row"} display={"flex"} columnGap={3}>
                    <img
                      alt="document"
                      style={{
                        width: "70px",
                        height: "70px",
                        alignSelf: "center",
                      }}
                      src="/img/document.png"
                    ></img>
                    <Box>
                      <Typography
                        fontSize={"25px"}
                        fontWeight={"500"}
                        color={"#fff"}
                      >
                        System Analyst
                      </Typography>
                      <Typography
                        fontSize={"25px"}
                        fontWeight={"300"}
                        color={"#fff"}
                        sx={{ wordBreak: "break-word" }}
                      >
                        I&apos;m a system analyst with experience in creating
                        technical documents and effectively communicating with
                        teams in a systematic manner
                      </Typography>
                    </Box>
                  </Box>
                </div>
              </Stack>
            </Stack>
          </Box>
        </div>
      </section>
      <section
        id="experience"
        className={styles.container}
        style={{ marginTop: "10rem" }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <Box px={5} py={5}>
            <Typography
              fontSize={"35px"}
              fontWeight={"500"}
              color={"#fff"}
              sx={{ textTransform: "uppercase" }}
            >
              Experience
            </Typography>
            <Stack direction={{ lg: 'column', xl: 'row' }} mt={1} spacing={10} sx={{

            }}>
              <Box width={"50%"}>
                <Grid container rowSpacing={5}>
                  {tech_stack.map((item) => {
                    return (
                      <Grid
                        key={item.tech_name}
                        item
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3}
                      >
                        <Stack direction={"column"} alignItems={"center"}>
                          <Box
                            width={"120px"}
                            height={"120px"}
                            borderRadius={"60px"}
                            bgcolor={"#19376D"}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            <img
                              style={{ width: "60%" }}
                              src={item.tech_img}
                              alt="tech_stack"
                            />
                          </Box>
                          <Typography
                            mt={1}
                            fontSize={"21px"}
                            fontWeight={"500"}
                            color={"#fff"}
                          >
                            {item.tech_name}
                          </Typography>
                        </Stack>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
              <Stack
                direction={"column"}
                spacing={3}
                width={"50%"}
                justifyContent={"start"}
              >
                <div className={styles.historyItem}>
                  <Box flexDirection={"row"} display={"flex"} columnGap={3}>
                    <img
                      alt="codediva"
                      style={{
                        width: "70px",
                        height: "70px",
                        alignSelf: "center",
                      }}
                      src="/img/codediva.jpeg"
                    ></img>
                    <Box>
                      <Typography
                        fontSize={"25px"}
                        fontWeight={"500"}
                        color={"#fff"}
                      >
                        Backend Developer , CODEDIVA
                      </Typography>
                      <Typography
                        fontSize={"20px"}
                        fontWeight={"200"}
                        color={"#fff"}
                      >
                        Jul 2023 - Dec 2023
                      </Typography>
                      <List sx={{ listStyleType: "disc" }}>
                        <ListItem>
                          <ListItemIcon>
                            <CircleIcon
                              sx={{ color: "#fff", fontSize: "12px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            fontSize={"20px"}
                            fontWeight={"300"}
                            color={"#fff"}
                            sx={{
                              wordWrap: "break-word"
                            }}
                          >
                            Backend development using
                            TypeScript/NodeJS/ExpressJS/TypeORM/PostgreSQL
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CircleIcon
                              sx={{ color: "#fff", fontSize: "12px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            fontSize={"20px"}
                            fontWeight={"300"}
                            color={"#fff"}
                          >
                            Working on project that related to mutual funds and
                            provident funds
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CircleIcon
                              sx={{ color: "#fff", fontSize: "12px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            fontSize={"20px"}
                            fontWeight={"300"}
                            color={"#fff"}
                          >
                            Improve the system to enable better performance
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CircleIcon
                              sx={{ color: "#fff", fontSize: "12px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            fontSize={"20px"}
                            fontWeight={"300"}
                            color={"#fff"}
                          >
                            Improve project structure and code for easier
                            maintenance
                          </Typography>
                        </ListItem>
                      </List>
                    </Box>
                  </Box>
                </div>
                <div className={styles.historyItem}>
                  <Box flexDirection={"row"} display={"flex"} columnGap={3}>
                    <img
                      style={{
                        width: "70px",
                        height: "70px",
                        alignSelf: "center",
                      }}
                      alt="codediva"
                      src="/img/codediva.jpeg"
                    ></img>
                    <Box>
                      <Typography
                        fontSize={"25px"}
                        fontWeight={"500"}
                        color={"#fff"}
                      >
                        System Analyst , CODEDIVA
                      </Typography>
                      <Typography
                        fontSize={"20px"}
                        fontWeight={"200"}
                        color={"#fff"}
                      >
                        Jul 2023 - Dec 2023
                      </Typography>
                      <List sx={{ listStyleType: "disc" }}>
                        <ListItem>
                          <ListItemIcon>
                            <CircleIcon
                              sx={{ color: "#fff", fontSize: "12px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            fontSize={"20px"}
                            fontWeight={"300"}
                            color={"#fff"}
                          >
                            Analyze existing systems to develop new systems for improved performance and efficiency
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CircleIcon
                              sx={{ color: "#fff", fontSize: "12px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            fontSize={"20px"}
                            fontWeight={"300"}
                            color={"#fff"}
                          >
                            Utilize reverse engineering principles to design and analyze systems, aiming to create technical documents, flowcharts, and sequence diagrams
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CircleIcon
                              sx={{ color: "#fff", fontSize: "12px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            fontSize={"20px"}
                            fontWeight={"300"}
                            color={"#fff"}
                          >
                            Implemented solutions to optimize system performance
                          </Typography>
                        </ListItem>
                      </List>
                    </Box>
                  </Box>
                </div>
                <div className={styles.historyItem}>
                  <Box flexDirection={"row"} display={"flex"} columnGap={3}>
                    <img
                      alt="codediva"
                      style={{
                        width: "70px",
                        height: "70px",
                        alignSelf: "center",
                      }}
                      src="/img/codediva.jpeg"
                    ></img>
                    <Box>
                      <Typography
                        fontSize={"25px"}
                        fontWeight={"500"}
                        color={"#fff"}
                      >
                        Frontend Developer (Web Dashboard) , CODEDIVA
                      </Typography>
                      <Typography
                        fontSize={"20px"}
                        fontWeight={"200"}
                        color={"#fff"}
                      >
                        Jan 2024 - Mar 2024
                      </Typography>
                      <List sx={{ listStyleType: "disc" }}>
                        <ListItem>
                          <ListItemIcon>
                            <CircleIcon
                              sx={{ color: "#fff", fontSize: "12px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            fontSize={"20px"}
                            fontWeight={"300"}
                            color={"#fff"}
                            sx={{
                              wordWrap: "break-word"
                            }}
                          >
                            Frontend development using
                            TypeScript / Next JS / Material-UI / React Hooks / Redux
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CircleIcon
                              sx={{ color: "#fff", fontSize: "12px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            fontSize={"20px"}
                            fontWeight={"300"}
                            color={"#fff"}
                          >
                            Designed and developed new UI components using Material-UI / React JS
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CircleIcon
                              sx={{ color: "#fff", fontSize: "12px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            fontSize={"20px"}
                            fontWeight={"300"}
                            color={"#fff"}
                          >
                            Collaborated with Backend Developers to communicate data through RESTful APIs
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CircleIcon
                              sx={{ color: "#fff", fontSize: "12px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            fontSize={"20px"}
                            fontWeight={"300"}
                            color={"#fff"}
                          >
                            Integrated various APIs RESTful to fetch and manipulate data for dynamic content rendering
                          </Typography>
                        </ListItem>
                      </List>
                    </Box>
                  </Box>
                </div>
              </Stack>
            </Stack>
          </Box>
        </div>
      </section>
      <section
        id="projects"
        className={styles.container}
        style={{ marginTop: "10rem", marginBottom: "10rem" }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <Box px={5} py={5}>
            <Typography fontSize={"35px"} fontWeight={"500"} color={"#fff"} textTransform={'uppercase'}>
              Projects
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row' }} mt={3} spacing={4} justifyContent={'center'}>
              <Card sx={{ maxWidth: 345, borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  sx={{ height: 140, width: 345 }}
                  image="/img/portfolio_bg.png"
                  title="project"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Portfolio
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This project is created to showcase past works and experiences in a responsive web format
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifySelf: 'end' }}>
                  <Button size="small" onClick={() => {
                    window.open("https://portfolio-eight-eta-61.vercel.app/", "_blank");
                  }
                  }>Learn More</Button>
                  <Button size="small" onClick={() => {
                    window.open("https://github.com/KaritSung/Portfolio", "_blank");
                  }
                  }>Go to repository</Button>
                </CardActions>

              </Card>

              <Card sx={{ maxWidth: 345, borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/img/hotelbooking_bg.png"
                  title="project"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Hotel Booking
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This project is designed to enhance frontend developer skills such as creating new components and layouts for responsive web design.
                  </Typography>
                </CardContent>
                <CardActions>
                  <CardActions sx={{ justifySelf: 'end' }}>
                    <Button size="small" onClick={() => {
                      window.open("https://hotel-booking-peach-nu.vercel.app/", "_blank");
                    }
                    }>Learn More</Button>
                    <Button size="small" onClick={() => {
                      window.open("https://github.com/KaritSung/hotel_booking", "_blank");
                    }
                    }>Go to repository</Button>
                  </CardActions>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 345, borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/img/shopping_cart.png"
                  title="project"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Shopping cart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This project is created to simulate a shopping cart system and coupons to demonstrate the usage of conditions and discounts, ultimately summarizing the total price.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifySelf: 'end' }}>
                  <Button size="small" onClick={() => {
                    // window.open("https://portfolio-eight-eta-61.vercel.app/", "_blank");
                  }
                  }>Learn More</Button>
                  <Button size="small" onClick={() => {
                    // window.open("https://github.com/KaritSung/Portfolio", "_blank");
                  }
                  }>Go to repository</Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 345, borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/img/admin_dash.png"
                  title="project"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Admin dashboard template
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This project is created to simulate a shopping cart system and coupons to demonstrate the usage of conditions and discounts, ultimately summarizing the total price.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifySelf: 'end' }}>
                  <Button size="small" onClick={() => {
                    window.open("https://admin-dashboard-template-delta-ivory.vercel.app/", "_blank");
                  }
                  }>Learn More</Button>
                  <Button size="small" onClick={() => {
                    window.open("https://github.com/KaritSung/admin-dashboard-template", "_blank");
                  }
                  }>Go to repository</Button>
                </CardActions>
              </Card>
            </Stack>
          </Box>
        </div>
      </section>
      <footer id="contact" className={styles.container_footer}>
        <Stack direction={{ sm: 'column', md: 'row' }} spacing={5}>
          <Typography fontSize={"80px"}
            fontWeight={"600"}>Contact</Typography>
          <Stack direction={'column'} spacing={2}>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
              <EmailIcon />
              <Typography ml={1} fontSize={"30px"}
                fontWeight={"300"}>karit.sittisak@gmail.com</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
              <CallIcon />
              <Typography ml={1} fontSize={"30px"}
                fontWeight={"300"}>092-935-5603</Typography>
            </Box>
            <a style={{ cursor: 'pointer', textDecoration: 'none', color: 'white' }} href="https://github.com/KaritSung">
              <Box display={'flex'} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
                <GitHubIcon />
                <Typography ml={1} fontSize={"30px"}
                  fontWeight={"300"}>KaritSung</Typography>

              </Box>
            </a>
          </Stack>
        </Stack>
      </footer>
    </div>
  );
}

// src/pages/HomePage.jsx
import React, { useRef } from "react";
import { categories } from "../data/db";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PeopleIcon from "@mui/icons-material/People";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "./HomePage.module.css";

const missionPoints = [
  {
    icon: <AttachMoneyIcon className={styles.missionIcon} />,
    title: "Fair Compensation",
    description:
      "Our platform ensures artisans are paid directly and transparently, empowering them with economic independence.",
  },
  {
    icon: <AutoStoriesIcon className={styles.missionIcon} />,
    title: "Promote Storytelling",
    description:
      "Every product has a story. We provide a space for creators to share their process, culture, and inspiration.",
  },
  {
    icon: <PeopleIcon className={styles.missionIcon} />,
    title: "Foster Community",
    description:
      "Connect with creators and customers who value authentic, ethically produced goods and support local economies.",
  },
];

function HomePage() {
  const categorySectionRef = useRef(null);

  // This function scrolls the page smoothly to the category section.
  const scrollToCategories = () => {
    categorySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION */}
      <Box className={styles.hero}>
        <Container maxWidth="lg" disableGutters>
          <Box className={styles.containerInner}>
            <Box className={styles.heroContent}>
              <Typography variant="h1" className={styles.heroTitle}>
                Handcrafted with Heart
              </Typography>
              <Typography variant="h5" className={styles.heroSubtitle}>
                Directly connect with creators, discover the unique stories behind their work, and support a community built on fair compensation and cultural appreciation.
              </Typography>
              <Box className={styles.heroCTA}>
                <Button
                  variant="contained"
                  size="large"
                  className={styles.ctaButton}
                  endIcon={<ArrowForwardIcon />}
                  onClick={scrollToCategories}
                >
                  Explore Collections
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className={styles.ctaButtonSecondary}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* MISSION SECTION */}
      <Container maxWidth="lg" disableGutters sx={{ py: 8 }}>
        <Box className={styles.containerInner}>
          <Box className={styles.sectionHeader}>
            <Typography variant="overline" className={styles.sectionLabel}>
              Our Mission
            </Typography>
            <Typography variant="h2" className={styles.sectionTitle}>
              Empowering Independent Creators
            </Typography>
            <Typography variant="body1" className={styles.sectionSubtitle}>
              We believe in the power of human craft and the stories behind every creation
            </Typography>
          </Box>

          <Grid container spacing={4} mt={2} sx={{ display: 'flex', alignItems: 'stretch' }}>
            {missionPoints.map((point) => (
              <Grid item key={point.title} xs={12} md={4} sx={{ display: "flex", flex: '1 1 0' }}>
                <Card className={styles.missionCard}>
                  <Box className={styles.iconWrapper}>{point.icon}</Box>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h5" className={styles.missionTitle}>
                      {point.title}
                    </Typography>
                    <Typography className={styles.missionDescription}>
                      {point.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* CATEGORY SECTION */}
      <Box className={styles.categoriesSection} ref={categorySectionRef}>
        <Container maxWidth="lg" disableGutters sx={{ py: 8 }}>
          <Box className={styles.containerInner}>
            <Box className={styles.sectionHeader}>
              <Typography variant="overline" className={styles.sectionLabel}>
                Collections
              </Typography>
              <Typography variant="h2" className={styles.sectionTitle}>
                Explore Our Categories
              </Typography>
            </Box>

            <Grid container spacing={4} mt={2} sx={{ display: 'flex', alignItems: 'stretch' }}>
              {categories.map((category) => (
                <Grid item key={category.id} xs={12} md={6} sx={{ display: "flex", width: '45%' }}>
                  <Link to={`/category/${category.id}`} className={styles.categoryCardLink}>
                    <Card className={styles.categoryCard}>
                      <Box className={styles.categoryImageWrapper}>
                        <CardMedia
                          component="img"
                          image={category.image}
                          alt={category.name}
                          className={styles.categoryImage}
                        />
                      </Box>
                      <CardContent className={styles.categoryContent}>
                        <Typography variant="h5" className={styles.categoryTitle}>
                          {category.name}
                        </Typography>
                        <Typography className={styles.categoryDescription}>
                          {category.description}
                        </Typography>
                        <Box className={styles.categoryArrow}>
                          <Typography component="span" sx={{ mr: 1 }}>View</Typography>
                          <ArrowForwardIcon />
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
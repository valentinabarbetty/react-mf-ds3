/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Stats page components
import PaginationSimple from "layouts/sections/navigation/pagination/components/PaginationSimple";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={1} my={1}>
      <Container>
        <Grid container item xs={12} spacing={12} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <Grid container spacing={6} sx={{ mt: { xs: 0, md: 4 } }}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgFront}
                  icon="touch_app"
                  title={
                    <>
                      Feel the
                      <br />
                      Material Kit
                    </>
                  }
                  description="All the MUI components that you need in a development have been re-design with the new look."
                />
                <RotatingCardBack
                  image={bgBack}
                  title="Discover More"
                  description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                  action={{
                    type: "internal",
                    route: "/sections/page-sections/page-headers",
                    label: "start with header",
                  }}
                />
              </RotatingCard>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgFront}
                  icon="touch_app"
                  title={
                    <>
                      Feel the
                      <br />
                      Material Kit
                    </>
                  }
                  description="All the MUI components that you need in a development have been re-design with the new look."
                />
                <RotatingCardBack
                  image={bgBack}
                  title="Discover More"
                  description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                  action={{
                    type: "internal",
                    route: "/sections/page-sections/page-headers",
                    label: "start with header",
                  }}
                />
              </RotatingCard>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgFront}
                  icon="touch_app"
                  title={
                    <>
                      Feel the
                      <br />
                      Material Kit
                    </>
                  }
                  description="All the MUI components that you need in a development have been re-design with the new look."
                />
                <RotatingCardBack
                  image={bgBack}
                  title="Discover More"
                  description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                  action={{
                    type: "internal",
                    route: "/sections/page-sections/page-headers",
                    label: "start with header",
                  }}
                />
              </RotatingCard>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgFront}
                  icon="touch_app"
                  title={
                    <>
                      Feel the
                      <br />
                      Material Kit
                    </>
                  }
                  description="All the MUI components that you need in a development have been re-design with the new look."
                />
                <RotatingCardBack
                  image={bgBack}
                  title="Discover More"
                  description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                  action={{
                    type: "internal",
                    route: "/sections/page-sections/page-headers",
                    label: "start with header",
                  }}
                />
              </RotatingCard>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgFront}
                  icon="touch_app"
                  title={
                    <>
                      Feel the
                      <br />
                      Material Kit
                    </>
                  }
                  description="All the MUI components that you need in a development have been re-design with the new look."
                />
                <RotatingCardBack
                  image={bgBack}
                  title="Discover More"
                  description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                  action={{
                    type: "internal",
                    route: "/sections/page-sections/page-headers",
                    label: "start with header",
                  }}
                />
              </RotatingCard>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgFront}
                  icon="touch_app"
                  title={
                    <>
                      Feel the
                      <br />
                      Material Kit
                    </>
                  }
                  description="All the MUI components that you need in a development have been re-design with the new look."
                />
                <RotatingCardBack
                  image={bgBack}
                  title="Discover More"
                  description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                  action={{
                    type: "internal",
                    route: "/sections/page-sections/page-headers",
                    label: "start with header",
                  }}
                />
              </RotatingCard>
            </Grid>
          </Grid>
        </Grid>
        <PaginationSimple />
      </Container>
    </MKBox>
  );
}

export default Information;

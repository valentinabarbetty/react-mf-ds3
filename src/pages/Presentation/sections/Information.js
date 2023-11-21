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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import { useEffect, useState } from "react";

function Information() {
  const [breeds, setBreeds] = useState([]);
  const apiKey = `live_KubpQHMVPIU2VKXB7kjzYzhEphhPEJnmcwLIJSyCSFLhmyLqNuc0f3dr5gzteb2Z`;

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch(
          `https://api.thedogapi.com/v1/breeds?limit=100&page=0&api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data`);
        }
        const data = await response.json();
        setBreeds(data);
      } catch (error) {
        console.error(`Error`, error.message);
      }
    };
    fetchBreeds();
  }, [apiKey]);
  const fetchImagesForBreeds = async () => {
    const breedsWithImages = await Promise.all(
      breeds.map(async (breed) => {
        try {
          const response = await fetch(
            `https://api.thedogapi.com/v1/images/${breed.reference_image_id}`
          );
          if (!response.ok) {
            throw new Error(`Failed to fetch image data`);
          }
          const imageData = await response.json();
          return { ...breed, image: imageData.url };
        } catch (error) {
          console.error(`Error fetching image data for ${breed.name}:`, error.message);
          return breed; // Return the breed without an image
        }
      })
    );
    setBreeds(breedsWithImages);
  };
  useEffect(() => {
    fetchImagesForBreeds();
  }, [breeds]);
  return (
    <MKBox component="section" py={1} my={1}>
      <Container>
        <Grid container item xs={12} spacing={7} alignItems="center" sx={{ mx: "auto" }}>
          {breeds.map((breed) => (
            <Grid item xs={12} lg={4} sx={{ mx: "auto" }} key={breed.id}>
              <Grid container spacing={6} sx={{ mt: { xs: 0, md: 6 } }}>
                <RotatingCard sx={{ height: "50%", width: "60%" }}>
                  <RotatingCardFront
                    image={breed.image}
                    icon="touch_app"
                    title={breed.name}
                    description={breed.temperament}
                    sx={{ height: "50%", width: "60%" }}
                  />
                  <RotatingCardBack
                    image={breed.image}
                    title={breed.breed_group}
                    description={breed.origin}
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/page-headers",
                      label: "start with header",
                    }}
                    sx={{ height: "50%", width: "60%" }}
                  />
                </RotatingCard>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

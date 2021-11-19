import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import image from '../Assets/images/Banner.png'

export const Ayuda = () => {
  return (
    <>
      <section id="content">
        <h2 className="subheader">Preguntas frecuentes</h2>

        <Accordion
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#202020",
            color: "#fff",
            marginTop: '20px'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>¿Por que el color 202020?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Elegimos este color porque los colores oscuros son preferidos
              dentro de la comunidad de los otakus latinoamericanos. Ademas,
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>

            <img style={{ maxWidth: '90%', margin: '20px'}} src={image} alt="" />

          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#202020",
            color: "#fff",
            marginTop: '10px'

          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>¿Donde puedo reporar las fallos de la aplicacion?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Elegimos este color porque los colores oscuros son preferidos
              dentro de la comunidad de los otakus latinoamericanos. Ademas,
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>

            <img style={{ maxWidth: '90%', margin: '20px'}} src={image} alt="" />

          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#202020",
            color: "#fff",
            marginTop: '10px'

          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>¿Cuales son las tecnologias usadas en Wakai Otaku?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Elegimos este color porque los colores oscuros son preferidos
              dentro de la comunidad de los otakus latinoamericanos. Ademas,
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>

            <img style={{ maxWidth: '90%', margin: '20px'}} src={image} alt="" />

          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#202020",
            color: "#fff",
            marginTop: '10px'

          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>¿Por que usamos contenido de terceros?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Elegimos este color porque los colores oscuros son preferidos
              dentro de la comunidad de los otakus latinoamericanos. Ademas,
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>

            <img style={{ maxWidth: '90%', margin: '20px'}} src={image} alt="" />

          </AccordionDetails>
        </Accordion>
        
        <Accordion
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#202020",
            color: "#fff",
            marginTop: '10px'

          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>¿Cual es el anime mas visto?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>

            <img style={{ maxWidth: '90%', margin: '20px'}} src={image} alt="" />

          </AccordionDetails>
        </Accordion>

        
        <Accordion
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#202020",
            color: "#fff",
            marginTop: '10px'

          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>¿Como puedo donar a la plataforma?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Elegimos este color porque los colores oscuros son preferidos
              dentro de la comunidad de los otakus latinoamericanos. Ademas,
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>

            <img style={{ maxWidth: '90%', margin: '20px'}} src={image} alt="" />

          </AccordionDetails>
        </Accordion>

        
        <Accordion
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#202020",
            color: "#fff",
            marginTop: '10px'

          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>¿Cual es el equipo de desarrollo de la plataforma?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Elegimos este color porque los colores oscuros son preferidos
              dentro de la comunidad de los otakus latinoamericanos. Ademas,
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>

            <img style={{ maxWidth: '90%', margin: '20px'}} src={image} alt="" />

          </AccordionDetails>
        </Accordion>
      </section>
    </>
  );
};

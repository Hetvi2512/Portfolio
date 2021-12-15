import { Box, Text } from "@chakra-ui/layout";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { MdWork, MdSchool } from "react-icons/md";
import { ExpereinceEducation } from "../portfolio";
import { Grid } from "@chakra-ui/layout";
function ExperienceEducation() {
  return (
    <Grid bg="#FBD38D" justifyItems="center">
      <Text fontSize="4xl">{ExpereinceEducation?.title}</Text>
      <VerticalTimeline>
        {ExpereinceEducation?.content.map((exp) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={exp.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={exp.icon === "work" ? <MdWork /> : <MdSchool />}
          >
            <h2 className="vertical-timeline-element-title">{exp.place}</h2>
            <h4 className="vertical-timeline-element-subtitle">{exp.city}</h4>
            <p>{exp.details}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Grid>
  );
}

export default ExperienceEducation;

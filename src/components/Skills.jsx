import { IconButton } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import React from "react";
import { skillsSection } from "../portfolio";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  DiCss3,
  DiSass,
  DiJavascript1,
  DiNodejsSmall,
  DiNpm,
} from "react-icons/di";
import {
  SiTypescript,
  SiMysql,
  SiAmazonaws,
  SiMongodb,
  SiAuth0,
  SiJsonwebtokens,
  SiSocketdotio,
  SiApollographql,
  SiChakraui,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { Text } from "@chakra-ui/layout";
import Lottie from "react-lottie";
import animationData from "../animations/coding.json";
import { Wrap } from "@chakra-ui/layout";
import { WrapItem } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
function Skills() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrap justify="center" align="center">
      <WrapItem w={500}>
        <Lottie options={defaultOptions} />
      </WrapItem>
      <WrapItem>
        <VStack spacing={18}>
          <HStack spacing={10}>
            <Tippy content="Html5">
              <IconButton
                icon={<AiFillHtml5 />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>
            <Tippy content="css3">
              <IconButton icon={<DiCss3 />} fontSize={50} variant="unstyled" />
            </Tippy>
            <Tippy content="sass">
              <IconButton icon={<DiSass />} fontSize={50} variant="unstyled" />
            </Tippy>
          </HStack>
          <HStack spacing={10}>
            <Tippy content="JavaScript">
              <IconButton
                icon={<DiJavascript1 />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>
            <Tippy content="TypeScript">
              <IconButton
                icon={<SiTypescript />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>
            <Tippy content="Reactjs">
              <IconButton
                icon={<GrReactjs />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>
          </HStack>
          <HStack spacing={10}>
            <Tippy content="Apollo GraphQl">
              <IconButton
                icon={<SiApollographql />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>

            <Tippy content="nodejs">
              <IconButton
                icon={<DiNodejsSmall />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>
            <Tippy content="npm">
              <IconButton icon={<DiNpm />} fontSize={50} variant="unstyled" />
            </Tippy>
          </HStack>
          <HStack spacing={10}>
            <Tippy content="sql-database">
              <IconButton icon={<SiMysql />} fontSize={50} variant="unstyled" />
            </Tippy>

            <Tippy content="mongoDB">
              <IconButton
                icon={<SiMongodb />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>
            <Tippy content="aws">
              <IconButton
                icon={<SiAmazonaws />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>
          </HStack>
          <HStack spacing={10}>
            <Tippy content="git">
              <IconButton
                icon={<AiFillGithub />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>
            <Tippy content="Oauth0">
              <IconButton icon={<SiAuth0 />} fontSize={50} variant="unstyled" />
            </Tippy>
            <Tippy content="JWT">
              <IconButton
                icon={<SiJsonwebtokens />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>{" "}
          </HStack>
          <HStack spacing={10}>
            <Tippy content="Socket IO">
              <IconButton
                icon={<SiSocketdotio />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>

            <Tippy content="Chakra UI">
              <IconButton
                icon={<SiChakraui />}
                fontSize={50}
                variant="unstyled"
              />
            </Tippy>
          </HStack>
          <Spacer />
          {skillsSection.skills.map((skill) => {
            return (
              <Text textAlign={["center", "center"]} key={skill}>
                {skill}
              </Text>
            );
          })}
        </VStack>
      </WrapItem>
      {/* {skillsSection.softwareSkills.map((skill) => {
        return (
          <GridItem colSpan={1}>
            <Tippy placement="bottom-start" content={skill.skillName}>
              <IconButton
                className="iconify"
                data-icon={skill.fontAwesomeClassname}
                data-inline="false"
              />
            </Tippy>
          </GridItem>
        );
      })} */}
    </Wrap>
  );
}

export default Skills;

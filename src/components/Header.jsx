import { IconButton } from "@chakra-ui/button";
import { Center, Text, VStack, Wrap, WrapItem } from "@chakra-ui/layout";
import { FaLaptopCode } from "react-icons/fa";
import animationData from "../animations/woman.json";
import Lottie from "react-lottie";
import Typical from "react-typical";

import React from "react";

function Header() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Wrap bg="#FBD38D" align="center" justify="center">
      <WrapItem>
        <Center marginTop={20}>
          <VStack spacing={8}>
            <IconButton
              icon={<FaLaptopCode />}
              fontSize={{ base: "45px", md: "50px", lg: "80px" }}
              variant="unstyled"
            />
            <Text fontSize={{ base: "40px", md: "50px", lg: "70px" }}>
              Hi all, I'm Hetvi
            </Text>

            <Text fontSize={{ base: "20px", md: "20px", lg: "25px" }} p={2}>
              <Typical
                steps={[
                  `I am a Full Stack Web Developer working with Javascript, NodeJs,
              ReactJS and some other cool libraries and frameworks.`,
                  2000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </Text>
          </VStack>
        </Center>
      </WrapItem>
      <WrapItem>
        <Center>
          <Lottie options={defaultOptions} width={350} />
        </Center>
      </WrapItem>
    </Wrap>
  );
}

export default Header;

import { IconButton } from "@chakra-ui/button";
import { Box, Center, Text, VStack, Wrap, WrapItem } from "@chakra-ui/layout";
import { FaLaptopCode, FaMoon, FaSun } from "react-icons/fa";
import Lottie from "react-lottie";
import Typical from "react-typical";
import { HeaderSection } from "../portfolio";
import React from "react";
import { HStack } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import animationData from "../animations/woman.json";
import lightGithubData from "../animations/light-github.json";
import darkGithubData from "../animations/dark-github.json";
import linkedInData from "../animations/linkedIn.json";
import mailData from "../animations/mail.json";
function Header({ colorMode, toggleColorMode }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const linkedInOptions = {
    loop: true,
    autoplay: true,
    animationData: linkedInData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lightGithubOptions = {
    loop: true,
    autoplay: true,
    animationData: lightGithubData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const darkGithubOptions = {
    loop: true,
    autoplay: true,
    animationData: darkGithubData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mailOptions = {
    loop: true,
    autoplay: true,
    animationData: mailData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Box bg={colorMode === "dark" ? "dark" : "#9DECF9"}>
        <Box paddingRight={5}>
          <HStack marginTop="2%" justify="right">
            {/* <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="solid"
              />
              <MenuList role="menu">
                <MenuItem role="menuitem">Skills </MenuItem>
                <MenuItem>Experience and Education</MenuItem>
                <MenuItem>Projects</MenuItem>
              </MenuList>
            </Menu> */}
            <IconButton
              icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
              isRound="true"
              size="lg"
              onClick={toggleColorMode}
            />
          </HStack>
        </Box>

        <Wrap align="center" justify="center">
          <WrapItem>
            <Center marginTop={10}>
              <VStack spacing={8}>
                <IconButton
                  icon={<FaLaptopCode />}
                  fontSize={{ base: "45px", md: "50px", lg: "80px" }}
                  variant="unstyled"
                />
                <Text fontSize={{ base: "40px", md: "50px", lg: "70px" }}>
                  {HeaderSection.title}
                </Text>

                <Text
                  fontSize={{ base: "20px", md: "20px", lg: "25px" }}
                  p={2}
                  textAlign={["center", "center"]}
                >
                  {HeaderSection.description}
                  <Typical
                    steps={HeaderSection.skills}
                    loop={Infinity}
                    wrapper="p"
                  />
                </Text>
              </VStack>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center>
              <VStack>
                <Lottie options={defaultOptions} width={350} />
                <HStack>
                  <span
                    onClick={() => {
                      console.log("Linkedin");
                    }}
                  >
                    <Lottie options={linkedInOptions} width={50} />
                  </span>
                  <Spacer />
                  <span
                    onClick={() =>
                      (window.location = "https://github.com/Hetvi2512")
                    }
                  >
                    <Lottie
                      options={
                        colorMode === "dark"
                          ? darkGithubOptions
                          : lightGithubOptions
                      }
                      width={50}
                    />
                  </span>
                  <span
                    onClick={() =>
                      (window.location = "mailto:hetvishah2512@gmail.com")
                    }
                  >
                    <Lottie options={mailOptions} width={65} />
                  </span>
                </HStack>
              </VStack>
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </>
  );
}

export default Header;

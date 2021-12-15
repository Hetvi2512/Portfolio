import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { WrapItem } from "@chakra-ui/layout";
import { Badge } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Wrap } from "@chakra-ui/layout";
import React, { useState } from "react";
import { MdReceipt } from "react-icons/md";
import { Projects } from "../portfolio";
import { useDisclosure } from "@chakra-ui/hooks";
import ProjectModal from "./ProjectModal";
function Project() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState();
  const handleModal = (id) => {
    onOpen();
    setId(id);
  };
  return (
    <Wrap justify="center">
      {Projects.map((project, index) => (
        <React.Fragment key={index}>
          <WrapItem>
            <Box
              w={[300, 500]}
              borderWidth="1px"
              borderRadius="lg"
              height="450px"
            >
              <Image
                w={[300, 500]}
                maxH="200px"
                src={project.imageUrl}
                alt={project.imageAlt}
              />
              <Box p="6" align="center">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  <Text fontSize={{ base: "20px", md: "25px", lg: "30px" }}>
                    {project.title}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Text fontSize="xl">{project.shortdescription}</Text>
                </Box>
              </Box>
              <Box align="center">
                <Button
                  onClick={() => handleModal(index)}
                  colorScheme="twitter"
                  leftIcon={<MdReceipt />}
                  height="48px"
                  width="200px"
                  marginBottom="3"
                >
                  View Details
                </Button>
              </Box>
            </Box>
            <Spacer />
          </WrapItem>
        </React.Fragment>
      ))}
      {isOpen && (
        <Box>
          <ProjectModal isOpen={isOpen} onClose={onClose} index={id} />
        </Box>
      )}
    </Wrap>
  );
}

export default Project;

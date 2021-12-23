import React from "react";
import { Button } from "@chakra-ui/button";
import { ModalOverlay } from "@chakra-ui/modal";
import { ModalHeader } from "@chakra-ui/modal";
import { ModalBody } from "@chakra-ui/modal";
import { ModalFooter } from "@chakra-ui/modal";
import { ModalCloseButton } from "@chakra-ui/modal";
import { ModalContent } from "@chakra-ui/modal";
import { Modal } from "@chakra-ui/modal";
import { Projects } from "../portfolio";
import { Image } from "@chakra-ui/image";
import Tippy from "@tippyjs/react";
import { Text } from "@chakra-ui/layout";
import { Wrap } from "@chakra-ui/layout";
import { WrapItem } from "@chakra-ui/layout";

function ProjectModal(props) {
  const { isOpen, onClose, index } = props;
  const {
    title,
    imageUrl,
    imageAlt,
    shortdescription,
    longDescription,
    technology,
  } = Projects[index];

  return (
    <>
      {" "}
      {title && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent width={{ lg: "600px", md: "500px", base: "350px" }}>
            <ModalHeader>
              <Text fontSize="2xl">{title}</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={imageUrl} alt={imageAlt} />
              <br />
              <Text fontSize="xl">
                {shortdescription} {longDescription}
              </Text>
              <br />
              <Text fontSize="xl">Technology Used:</Text>

              <Wrap marginTop={5} maxH="30px" maxW="50px">
                <WrapItem>
                  {technology.map((tech) => (
                    <Tippy content={tech.tech}>
                      <Image
                        src={tech.image}
                        marginRight={1}
                        height={12}
                        objectFit="cover"
                      />
                    </Tippy>
                  ))}
                </WrapItem>
              </Wrap>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default ProjectModal;

import { Box, Flex, HStack, Link, useDisclosure, Stack } from "@chakra-ui/react";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="brand.700" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box
            as="button"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          >
            {isOpen ? "Close" : "Menu"}
          </Box>
          <HStack spacing={8} alignItems="center">
            <Box color="white" fontWeight="bold">Logo</Box>
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "brand.800" }} href="#">
                Home
              </Link>
              <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "brand.800" }} href="#">
                About
              </Link>
              <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "brand.800" }} href="#">
                Contact
              </Link>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "brand.800" }} href="#">
                Home
              </Link>
              <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "brand.800" }} href="#">
                About
              </Link>
              <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "brand.800" }} href="#">
                Contact
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
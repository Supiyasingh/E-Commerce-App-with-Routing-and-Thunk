import { Box, Flex, IconButton, Text, Spacer } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Link to="/">
          <Text fontSize="2xl" fontWeight="bold">My-Store</Text>
        </Link>
        <Spacer />
        <Link to="/cart">
          <IconButton
            icon={<FaShoppingCart />}
            aria-label="Cart"
            colorScheme="white"
          />
          <Text as="span" ml={2}>{totalCount}</Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;

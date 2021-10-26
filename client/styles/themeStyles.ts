const rowanBrown = '#3f1a0a';
const rowanYellow = '#edd51c';
export const Button = {
  variants: {
    solid: {
      bg: rowanYellow,
      color: rowanBrown,
      _hover: {
        bg: rowanBrown,
        color: rowanYellow,
      },
    },
    outline: {
      border: '2px solid',
      borderColor: rowanBrown,
      color: rowanBrown,
      _hover: {
        bg: rowanBrown,
        color: rowanYellow,
      },
    },
  },
};

export const Input = {
  baseStyle: {
    focusBorderColor: rowanYellow,
  },
};

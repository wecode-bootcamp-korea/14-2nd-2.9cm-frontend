import React from "react";
import styled, { StyleSheetManager } from "styled-components";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "space-around",
};

const loadingCircle = {
  display: "block",
  width: "20px",
  height: "20px",
  marginRight: "5px",
  background: "#000",
  borderRadius: "50%",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut",
};

export default function Loading() {
  return (
    <LoadingBar>
      <motion.div
        style={loadingContainer}
        variants={loadingContainerVariants}
        inital="start"
        animate="end"
      >
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </LoadingBar>
  );
}

const LoadingBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  opacity: 0.7;
  z-index: 10000;
`;

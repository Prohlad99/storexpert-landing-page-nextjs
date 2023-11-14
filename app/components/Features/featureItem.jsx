"use client";
import { motion } from "framer-motion";
import Paragraph from "./../Atoms/Paragraph";

export default function FeatureItem({ feature, i }) {
  const featureItem = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: i * 0.1 },
    },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={featureItem}
      viewport={{ amount: 0 }}
      className="flex flex-col border shadow-lg rounded-xl feature-item"
    >
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-black-200">
        <h4 className="text-black-100 font-body font-medium text-lg">
          {feature?.title}
        </h4>
        <img src={feature?.logo} alt="feature-logo" />
      </div>
      <div className="p-6 pb-10">
        <Paragraph>{feature?.content}</Paragraph>
      </div>
    </motion.section>
  );
}
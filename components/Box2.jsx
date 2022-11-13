import { motion } from "framer-motion";

export default function Box2() {
  return (
    <section className="p-[5rem]">
      <div className="box-container pb-[5rem] grid">
        <motion.div
          drag
          dragConstraints={{
            left: -20,
            right: 20,
            top: 5,
            bottom: 5,
          }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
            },
          }}
          whileTap={{ scale: 0.95 }}
          className="box w-[20rem] h-[20rem] bg-[aquamarine] grid place-items-center"
        ></motion.div>
      </div>
    </section>
  );
}

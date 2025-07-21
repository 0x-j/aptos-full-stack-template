import React from "react";

export const Hero = () => {
  return (
    <section className="text-center py-10 space-y-4">
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        Aptos Full Stack Demo
      </h2>
      <p className="text-muted-foreground">
        Explore messages and interact with the blockchain.
      </p>
    </section>
  );
};

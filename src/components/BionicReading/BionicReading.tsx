import React, { ComponentPropsWithoutRef, ReactHTML } from "react";
import { textVide } from "text-vide";

interface BionicReadingProps<C extends keyof ReactHTML = keyof ReactHTML> {
  text: any;
  as: C;
  props?: ComponentPropsWithoutRef<C>;
}

const BionicReading = ({
  text,
  as: Component = "p",
  props,
}: BionicReadingProps) => {
  const highlightedText = textVide(text, { fixationPoint: 3 });

  return (
    // @ts-ignore
    <Component
      {...props}
      dangerouslySetInnerHTML={{ __html: highlightedText }}
    />
  );
};

export default BionicReading;

import { ComponentChildren } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type propsType = {
  readonly onClick: () => void;
  readonly children: ComponentChildren;
};

export function Button(props: propsType) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER}
      class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
    />
  );
}

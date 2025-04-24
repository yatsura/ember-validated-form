import { getOwnConfig } from "@embroider/macros";
import { ensureSafeComponent } from "@embroider/util";

export default function passedOrDefault(componentName) {
  return function (target, property) {
    return {
      get() {
        if (this.args[property]) {
          return ensureSafeComponent(this.args[property], this);
        }
        const componentLocation = getOwnConfig()[componentName];
        return ensureSafeComponent(`${componentLocation}`, this);
      },
    };
  };
}

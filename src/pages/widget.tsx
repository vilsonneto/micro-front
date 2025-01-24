import { useEffect } from "react";

export default function Widget() {
  useEffect(() => {
    import("../components/Chat/widget");
  }, []);

  return null;
}

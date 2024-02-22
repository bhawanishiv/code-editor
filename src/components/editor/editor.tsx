import { useEffect, useRef } from "react";
import { monaco } from "./base";

export interface EditorProps {}

export default function Editor({}: EditorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Add additional d.ts files to the JavaScript language service and change.
    // Also change the default compilation options.
    // The sample below shows how a class Facts is declared and introduced
    // to the system and how the compiler is told to use ES6 (target=2).

    // validation settings
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: false,
    });

    // compiler options
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2015,
      allowNonTsExtensions: true,
    });

    const editor = monaco.editor.create(ref.current, {
      value: 'console.log("Hello, world")',
      language: "typescript",
      automaticLayout: true,
      theme: "vs-dark",
    });

    return () => {
      editor.dispose();
    };
  }, []);

  const renderEditor = () => {
    return <div className="h-full" ref={ref}></div>;
  };

  return renderEditor();
}

import React from "react";
import { Editor } from "@tinymce/tinymce-react";
const TextEditor = ({ insertArticle }) => {
  const handleEditorChange = (content) => {
    insertArticle(content)
  }
  return (
    <Editor
      apiKey="02d2h4c3fsz3dfsafwx2xi2xadbqvqr5jr2klp1t9m6bnw5d"
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify link | removeformat",
      }}
      onEditorChange={handleEditorChange}
    />
  );
};
export default TextEditor;

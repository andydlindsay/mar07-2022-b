// import {useEffect} from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";

const DocumentTitle = () => {
  const title = 'Does this work???';

  useDocumentTitle(title);

  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  return (
    <div>
      <h2>Document Title Component</h2>
    </div>
  );
};

export default DocumentTitle;

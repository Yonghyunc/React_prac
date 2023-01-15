import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/auth/EditorContainer';
import TagBox from '../components/write/TagBox';
import WriteActionButtons from '../components/write/WriteActionButton';


const WritePage = () => {
  return(
    <Responsive>
      <EditorContainer />
      <TagBox />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
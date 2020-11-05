import React, { useState } from 'react';

import Header from './components/header/header.component';
import Title from './components/title/title.component';
import Slideshow from './components/slideshow/slideshow.component';
import UploadForm from './components/upload-form/upload-form.component';
import ImageGrid from './components/image-grid/image-grid.component';
import Modal from './components/modal/modal.component';
import Footer from './components/footer/footer.component';

import './App.scss';


const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Header />
      <Title />
      <Slideshow />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
      <Footer />
    </div>
  );
}

export default App;

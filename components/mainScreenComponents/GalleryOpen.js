import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useState, useContext} from 'react';
import {GALLERY} from '../../data/gallery';
import {GalleryModal, ImageDetails} from '../GalleryDcreenComponents';
import GeneralColors from '../../constants/colors';
import ButtonCustom from '../ButtonCustom';
import {BreedContext} from '../../store/breed_context';
import {ScrollView} from 'react-native-gesture-handler';

const GalleryOpen = () => {
  const photoContext = useContext(BreedContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageDetail, setImageDetail] = useState();
  const allPhoto = photoContext.gallery;

  const renderImages = itemData => {
    const image = itemData.item.image;

    function showImageFullScreen() {
      console.log(itemData.item.id);
      setModalIsOpen(true);
      setImageDetail(itemData.item);
    }

    return (
      <TouchableOpacity style={styles.touchable} onPress={showImageFullScreen}>
        <Image source={{uri: image}} style={styles.image} />
      </TouchableOpacity>
    );
  };
  // console.log(GALLERY.map(item => item.image));
  function modalCloseHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <FlatList
        // data={GALLERY}
        data={allPhoto}
        renderItem={renderImages}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
      <ScrollView>
        <GalleryModal isOpen={modalIsOpen}>
          <View style={styles.modalInternalContainer}>
            <ButtonCustom onPress={modalCloseHandler}>Close modal</ButtonCustom>
            <ImageDetails imageDetails={imageDetail} />
          </View>
        </GalleryModal>
      </ScrollView>
    </>
  );
};

export default GalleryOpen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    padding: 6,
    width: '100%',
    height: 150,
    // margin: 5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    flex: 1,
    margin: 5,
  },
  modalInternalContainer: {
    paddingTop: 10,
    backgroundColor: GeneralColors.maroon,
    flex: 1,
  },
});

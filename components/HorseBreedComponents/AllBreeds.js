import {StyleSheet, FlatList, TouchableOpacity, View} from 'react-native';
import {useState, useContext, useEffect} from 'react';
// import {HORSES} from '../../data/horses';
import {BreedDetails, BreedGrid} from './index';
import {GalleryModal} from '../GalleryDcreenComponents';
import GeneralColors from '../../constants/colors';
import ButtonCustom from '../ButtonCustom';
import {BreedContext} from '../../store/breed_context';
import AppleMap from '../ui/Map';

const AllBreeds = ({route, regionFilter}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [breedDetails, setBreedDetails] = useState();
  const [breedList, setBreedList] = useState();
  const breedCtx = useContext(BreedContext);
  const allBreeds = breedCtx.breeds;
  // console.log(breedList);

  // console.log(allBreeds.map(breed => breed.location));

  // console.log(allBreeds.filter(breed=>{
  //   const hasLocation=regionFilter.evey(everyRegion=>allBreeds.location)
  // }))

  // console.log(allBreeds.filter(breed => breed.breed === 'Arabian Horse'));
  // console.log('(AllBreeds.js) Region selected filter -', regionFilter);
  // console.log(
  //   allBreeds.filter(breed => {
  //     const hasLocation = regionFilter.every(location =>
  //       breed.location.includes(location),
  //     );
  //     console.log(hasLocation);
  //     return hasLocation;
  //   }),
  // );

  // function filteredBreeds() {

  //   // const breedLocation = AllBreeds.map(breed => breed.location);
  //   const newBreedList = allBreeds.filter(breed => {
  //     const hasLocation = regionFilter.every(location =>
  //       // breed.location.includes(filterLocation),
  //       breed.location.includes(location),
  //     );
  //     return hasLocation;
  //   });
  //   setBreedList(newBreedList);
  // }

  function filteredBreeds() {
    if (regionFilter.length === 0) {
      setBreedList(allBreeds);
      return;
    }

    const filteredSet = new Set();

    regionFilter.forEach(location => {
      allBreeds.forEach(breed => {
        if (breed.location.includes(location)) {
          filteredSet.add(breed);
        }
      });
    });

    setBreedList(Array.from(filteredSet));
  }

  function renderBreeds(itemData) {
    function showBreedDetails() {
      setBreedDetails(itemData);
      setIsOpenModal(true);
    }

    return (
      <TouchableOpacity activeOpacity={0.7} onPress={showBreedDetails}>
        <BreedGrid breedItem={itemData.item} />
      </TouchableOpacity>
    );
  }
  function closeModal() {
    setIsOpenModal(false);
  }
  useEffect(() => {
    filteredBreeds();
  }, [regionFilter, breedCtx]);

  return (
    <>
      <FlatList
        // data={allBreeds}
        data={breedList}
        keyExtractor={item => item.id}
        renderItem={renderBreeds}
      />
      <GalleryModal isOpen={isOpenModal}>
        <View style={styles.modalInternalContainer}>
          <ButtonCustom onPress={closeModal}>Close modal</ButtonCustom>
          <BreedDetails details={breedDetails} route={route} />
        </View>
      </GalleryModal>
    </>
  );
};

export default AllBreeds;

const styles = StyleSheet.create({
  modalInternalContainer: {
    paddingTop: '5%',
    backgroundColor: GeneralColors.maroon,
    flex: 1,
  },
});

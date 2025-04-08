import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ProfileForm from '../components/ProfileForm';
import {UserProfile, ProfileForm} from '../components';

const ProfileScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userProfileData, setUserProfile] = useState();
  const [isProfile, setIsProfile] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // console.log(userProfileData);

  useEffect(() => {
    async function getUser() {
      try {
        const user = await AsyncStorage.getItem('formData');
        const userData = user ? JSON.parse(user) : null;

        if (userData && userData.userId) {
          // navigation.navigate('AllHotelsScreen');
          setUserProfile(userData);
          setIsProfile(true);
        }
      } catch (error) {
        console.log('Error fetching', error);
      } finally {
        setIsLoading(false);
      }
    }
    getUser();
  }, [navigation]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text size="large" color="#0000ff">
          Loading... Please wait.
        </Text>
      </View>
    );
  }

  const handleFormSubmit = async formData => {
    console.log(formData);
    try {
      await AsyncStorage.setItem('formData', JSON.stringify(formData));
      setUserProfile(formData);
      setIsProfile(true);
      setIsEditing(false);
    } catch (error) {
      console.log('Error saving user data', error);
    }
  };

  const handleUpdate = () => {
    setIsEditing(true);
    setIsProfile(false);
  };

  const profile = (
    <>
      <UserProfile data={userProfileData} onUpdate={handleUpdate} />
    </>
  );

  const componentsToRender =
    isProfile && !isEditing ? (
      profile
    ) : (
      <ProfileForm onSubmit={handleFormSubmit} initialData={userProfileData} />
    );

  return (
    <>{componentsToRender}</>
    // <View>
    //   <Text>ProfileScreen</Text>
    //   <ProfileForm onSubmit={handleFormSubmit} />
    // </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

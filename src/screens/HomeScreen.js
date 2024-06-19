import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, FlatList, Dimensions } from 'react-native';
import JobCard from '../components/JobCard';

const { width } = Dimensions.get('window');

const jobData = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', icon: require('../../pictures/Vector.png') },
  { id: '2', title: 'Data Analyst', company: 'Google', icon: require('../../pictures/google.png') },
  { id: '3', title: 'Manager', company: 'Paul Nii Tackie', icon: require('../../pictures/splash.png') },
];

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.statusBarContainer}>
          <Image
            source={require('../../pictures/iPhone X.png')}
            style={styles.statusBar}
            resizeMode="cover"
          />
        </View>
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.title1}>{name}</Text>
            <Text style={styles.subtitle}>{email}</Text>
          </View>
          <Image source={require('../../pictures/DP.png')} style={styles.imagehome} />
        </View>
        
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search a job or position"
          />
          <Image source={require('../../pictures/filter.png')} style={styles.searchImage} />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        
        <FlatList
          data={jobData}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <View style={styles.categoryItemContent}>
                <View style={styles.iconContainer}>
                  <Image source={item.icon} style={styles.icon} />
                </View>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.company}>{item.company}</Text>
                </View>
              </View>
              <View style={styles.jobDetails}>
                <Text style={styles.salary}>$180,00</Text>
                <Text style={styles.location}>Accra, Ghana</Text>
              </View>
            </View>
          )}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Image source={require('../../pictures/burgerking.png')} style={styles.cardIcon} />
            <View style={styles.cardText}>
              <Text style={styles.jobTitle}>Jr Executive</Text>
              <Text style={styles.companyName}>Burger King</Text>
            </View>
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.salary}>$96,000/y</Text>
            <Text style={styles.location}>Los Angeles, US</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Image source={require('../../pictures/bbd.png')} style={styles.cardIcon} />
            <View style={styles.cardText}>
              <Text style={styles.jobTitle}>Product Manager</Text>
              <Text style={styles.companyName}>Beats</Text>
            </View>
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.salary}>$84,000/y</Text>
            <Text style={styles.location}>Florida, US</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Image source={require('../../pictures/Vector.png')} style={styles.cardIcon} />
            <View style={styles.cardText}>
              <Text style={styles.jobTitle}>Product Manager</Text>
              <Text style={styles.companyName}>Facebook</Text>
            </View>
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.salary}>$86,000/y</Text>
            <Text style={styles.location}>Florida, US</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  statusBarContainer: {
    width: '100%',
    height: 40,
  },
  statusBar: {
    width: '100%',
    height: '100%',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  userInfo: {
    flex: 1,
  },
  title1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
  imagehome: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 20,
  },
  searchBox: {
    height: 40,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
  },
  searchImage: {
    width: 50,
    height: 50,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'gray',
  },
  categoryItem: {
    backgroundColor: '#007fff',
    borderRadius: 8,
    marginRight: 16,
    padding: 20,
    width: 300,
    height: 200,
    justifyContent: 'space-between',
  },
  categoryItemContent: {
    flexDirection: 'row',
    gap: 20,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  company: {
    color: 'white',
  },
  jobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salary: {
    color: 'white',
  },
  location: {
    color: 'white',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 16,
    padding: 15,
    marginVertical: 10,
  },
  cardContent: {
    flexDirection: 'row',
    gap: 20,
  },
  cardIcon: {
    width: 50,
    height: 50,
  },
  cardText: {
    flexDirection: 'column',
  },
  jobTitle: {
    fontWeight: 'bold',
  },
  companyName: {
    marginTop: 5,
  },
  cardDetails: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});


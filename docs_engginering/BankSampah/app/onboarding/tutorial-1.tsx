import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';

export default function TutorialScreen1() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/onboarding/tutorial-2');
  };

  const handleSkip = () => {
    router.push('/onboarding/location-selection');
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View 
        entering={FadeIn.duration(600)}
        style={styles.content}
      >
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={handleSkip}
          activeOpacity={0.7}
        >
          <Text style={styles.skipText}>Lewati</Text>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <View style={styles.placeholderImage}>
            <Text style={styles.emojiLarge}>♻️</Text>
            <Text style={styles.emojiSmall}>💰</Text>
          </View>
        </View>

        <Animated.Text 
          entering={FadeInDown.delay(200).duration(600)}
          style={styles.title}
        >
          Ubah Sampah Menjadi Cuan
        </Animated.Text>

        <Animated.Text 
          entering={FadeInDown.delay(400).duration(600)}
          style={styles.description}
        >
          Setiap sampah yang Anda setorkan akan dikonversi menjadi uang tunai. 
          Semakin banyak Anda setor, semakin besar penghasilan Anda!
        </Animated.Text>

        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>
      </Animated.View>

      <Animated.View 
        entering={FadeInDown.delay(600).duration(600)}
        style={styles.buttonContainer}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Lanjut</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  skipButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  skipText: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
  imageContainer: {
    marginTop: 40,
    marginBottom: 32,
  },
  placeholderImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#10B981',
    position: 'relative',
  },
  emojiLarge: {
    fontSize: 80,
  },
  emojiSmall: {
    fontSize: 40,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E7EB',
  },
  progressDotActive: {
    backgroundColor: '#10B981',
    width: 24,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 32,
  },
  button: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

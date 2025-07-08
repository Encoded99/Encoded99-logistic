import React from 'react';
import { View, FlatList, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import packages from '@/app/data/packages';
import { Text, Card, useTheme, Divider } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Dashboard() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Dashboard Header */}
      <Text style={[styles.header, { color: theme.colors.onSurface }]}>
        📦 Deliveries
      </Text>

      {/* Package List */}
      <FlatList
        data={packages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/package/${item.id}`)} style={styles.pressable}>
            <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
              <Card.Content style={styles.cardContent}>
                <View style={styles.iconWrap}>
                  <MaterialIcons name="local-shipping" size={28} color={theme.colors.primary} />
                </View>
                <View style={styles.info}>
                  <Text style={[styles.title, { color: theme.colors.onSurface }]}>{item.recipient}</Text>
                  <Text style={{ color: theme.colors.outline }}>{item.status}</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <Divider style={{ backgroundColor: theme.colors.outline, marginVertical: 4 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  pressable: {
    marginBottom: 12,
  },
  card: {
    borderRadius: 12,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
});

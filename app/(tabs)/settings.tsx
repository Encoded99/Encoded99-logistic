import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Switch, useTheme, Card } from 'react-native-paper';
import { useFontScaling } from '../font-scale';
export default function SettingsScreen() {
  const theme = useTheme();
  const { scalingEnabled, toggleScaling } = useFontScaling();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Title
          title="Settings"
          titleStyle={[styles.title, { color: theme.colors.onSurface }]}
        />
        <Card.Content style={styles.row}>
          <Text style={[styles.label, { color: theme.colors.onSurface }]}>
            Enable Font Scaling
          </Text>
          <Switch value={scalingEnabled} onValueChange={toggleScaling} color={theme.colors.primary} />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderRadius: 12,
    paddingBottom: 16,
    marginVertical:20
  },
  title: {
    fontSize: 18, // locked font
    fontWeight: 'bold',
  },
  label: {
    fontSize: 15, // locked font
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
});

import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const Chessboard = () => {
  const boardSize = Dimensions.get("window").width;
  const squarewidth = boardSize / 8;
  const squareHeight = Dimensions.get("window").height / 8;

  const renderSquare = (row, col) => {
    const isBlack = (row + col) % 2 === 1;
    const backgroundColor = isBlack ? "#555" : "#fff";
    return (
      <View
        key={`${row}-${col}`}
        style={[
          styles.square,
          { backgroundColor },
          { height: squareHeight, width: squareHeight },
        ]}
      ></View>
    );
  };

  const renderRow = (row) => {
    const squares = [];
    for (let col = 0; col < 8; col++) {
      squares.push(renderSquare(row, col));
    }
    return (
      <View key={row} style={styles.row}>
        {squares}
      </View>
    );
  };

  const rows = [];
  for (let row = 0; row < 8; row++) {
    rows.push(renderRow(row));
  }

  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    borderWidth: 5,
    borderColor: "brown",
  },
  row: {
    flexDirection: "row",
  },
  square: {
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chessboard;

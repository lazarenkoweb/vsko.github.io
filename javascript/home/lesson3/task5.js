function makeChessboard(size) {
    for (i=0; i<size; i++) {
        if (i%size) document.write('\n');

        for (j=0; j<size; j++) {
            if (i%2 && j == 0) {
                document.write(' ');
            }

            document.write('#');

            if (j <= size-2) {
                document.write(' ');
            }
        }
    }
}

makeChessboard(8);

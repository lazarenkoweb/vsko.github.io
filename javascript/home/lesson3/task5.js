var x=8, y=8;

for (i=0; i<x; i++) {
    if (i%x) document.write('\n');

    for (j=0; j<y; j++) {
        if (i%2 && j == 0) {
            document.write(' ');
        }

        document.write('#');

        if (j <= x-2) {
            document.write(' ');
        }
    }
}
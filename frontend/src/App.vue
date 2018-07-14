<template>
  <div id="app" class="container">
    <!-- <navigation /> -->
    <search-bar />
    <category-selector />
    <div class="columns">
      <div class="column is-two-fifths">
        <book-list :books="books"
        :value="books"
        :transitionDuration="250"
        :lockAxis="'y'"
        :lockToContainerEdges="true"
        :useDragHandle="true"
        @input="onSortingEnded" />
      </div>
      <div class="column is-three-fifths">
        <book-detail :book="selectedBook" />
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from './event-bus';

import Book from './classes/Book';
import BookList from './components/BookList.vue';
import BookDetail from './components/BookDetail.vue';
import CategorySelector from './components/CategorySelector.vue';
import SearchBar from './components/SearchBar.vue';
import Navigation from './components/Navigation.vue';

const books = [
  new Book(1, '124214124', '1984', 'George Orwell', 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell\'s nightmare vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life--the ubiquity of television, the distortion of the language--and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.', 'Classics', 'In progress', 'https://images.gr-assets.com/books/1348990566l/5470.jpg'),
  new Book(2, '124214124', 'Doctor Zhivago', 'Boris Pasternak', 'This epic tale about the effects of the Russian Revolution and its aftermath on a bourgeois family was not published in the Soviet Union until 1987. One of the results of its publication in the West was Pasternak\'s complete rejection by Soviet authorities; when he was awarded the Nobel Prize for Literature in 1958 he was compelled to decline it. The book quickly became an international best-seller. Dr. Yury Zhivago, Pasternak\'s alter ego, is a poet, philosopher, and physician whose life is disrupted by the war and by his love for Lara, the wife of a revolutionary. His artistic nature makes him vulnerable to the brutality and harshness of the Bolsheviks. The poems he writes constitute some of the most beautiful writing in the novel.', 'Classics', 'In progress', 'https://images.gr-assets.com/books/1385508725l/130440.jpg'),
  new Book(3, '124214124', 'Escape from Freedom', 'Erich Fromm', 'If humanity cannot live with the dangers and responsibilities inherent in freedom, it will probably turn to authoritarianism. This is the central idea of Escape from Freedom, a landmark work by one of the most distinguished thinkers of our time, and a book that is as timely now as when first published in 1941. Few books have thrown such light upon the forces that shape modern society or penetrated so deeply into the causes of authoritarian systems. If the rise of democracy set some people free, at the same time it gave birth to a society in which the individual feels alienated and dehumanized. Using the insights of psychoanalysis as probing agents, Fromm’s work analyzes the illness of contemporary civilization as witnessed by its willingness to submit to totalitarian rule.', 'Classics', 'In progress', 'https://images.gr-assets.com/books/1361392634l/25491.jpg'),
  new Book(4, '124214124', 'The Sea Wolf', 'Jack London', 'The novel begins when Van Weyden is swept overboard into San Francisco Bay, and plucked from the sea by Larsen\'s seal-hunting vessel, the Ghost. This ships evil captain, Wolf Larsen - The Sea-Wolf - is a murderous tyrant who uses his superhuman strength to torture and destroy, his brilliant mind to invent sick games, and his relentless will to control his mutinous crew. Pressed into service as a cabin boy by the ruthless captain, Van Weyden becomes an unwilling participant in a brutal shipboard drama. Larsen\'s increasingly violent abuse of the crew fuels a mounting tension that ultimately boils into mutiny, shipwreck, and a desperate confrontation.', 'Classics', 'In progress', 'https://images.gr-assets.com/books/1389481608l/43049.jpg'),
  new Book(5, '124214124', 'Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', '100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come? In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come? Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.', 'Classics', 'In progress', 'https://images.gr-assets.com/books/1420585954l/23692271.jpg'),
  new Book(6, '124214124', 'Flow: The Psychology of Optimal Experience', 'Mihaly Csikszentmihalyi', 'Psychologist Mihaly\'s famous investigations of "optimal experience" have revealed that what makes an experience genuinely satisfying is a state of consciousness called flow. During flow, people typically experience deep enjoyment, creativity, and a total involvement with life. In this new edition of his groundbreaking classic work, Csikszentmihalyi demonstrates the ways this positive state can be controlled, not just left to chance. Flow: The Psychology of Optimal Experience teaches how, by ordering the information that enters our consciousness, we can discover true happiness and greatly improve the quality of our lives.', 'Classics', 'In progress', 'https://images.gr-assets.com/books/1432253110l/66354.jpg'),
  new Book(7, '124214124', 'The Great Gatsby', 'F. Scott Fitzgerald', 'A true classic of twentieth-century literature, this edition has been updated by Fitzgerald scholar James L.W. West III to include the author’s final revisions and features a note on the composition and text, a personal foreword by Fitzgerald’s granddaughter, Eleanor Lanahan—and a new introduction by two-time National Book Award winner Jesmyn Ward.The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.', 'Classics', 'In progress', 'https://images.gr-assets.com/books/1528221267l/4671.jpg'),
];

export default {
  name: 'app',
  data: () => ({
    books,
    selectedBook: books[0],
  }),
  methods: {
    selectBook() {
      EventBus.$emit('bookSelected', this.book);
    },
    onSortingEnded(sortedBooks) {
      this.books = sortedBooks;
    },
  },
  mounted() {
    [this.selectedBook] = this.books;

    EventBus.$on('bookSelected', (book) => {
      this.selectedBook = book;
    });
  },
  components: {
    BookList,
    BookDetail,
    CategorySelector,
    SearchBar,
    Navigation,
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma/sass/utilities/initial-variables";
@import "../node_modules/bulma/bulma";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 160px;
}
</style>

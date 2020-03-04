import React from 'react';
import '../../css/javascript30/day04/style.css';

import Prism from 'prismjs';
import '../../css/javascript30/day04/prism.css';

// https://prismjs.com/examples.html
export default class ArrayCardio extends React.Component {
	/** 클래스내 전역 변수 영역 **/
	private codeString: string;
	private htmlOutput: any;
	private outputArea: any;

	/** 상태 영역 **/
	constructor(props: any) {
		super(props);
		this.outputArea = React.createRef();

		this.codeString = `
        const inventors = [
            { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
            { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
            { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
            { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
            { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
            { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
            { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
            { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
            { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
            { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
            { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
            { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
          ];
      
          const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 
          'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 
          'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
          'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 
          'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 
          'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
          'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 
          'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 
          'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
      
          // Array.prototype.filter()
          // 1. Filter the list of inventors for those who were born in the 1500's
          const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
          console.table(fifteen);
      
          // Array.prototype.map()
          // 2. Give us an array of the inventor first and last names
          const fullNames = inventors.map(inventor => \${inventor.first} \${inventor.last}\`);
          console.log(fullNames);
      
          // Array.prototype.sort()
          // 3. Sort the inventors by birthdate, oldest to youngest
          // const ordered = inventors.sort(function(a, b) {
          //   if(a.year > b.year) {
          //     return 1;
          //   } else {
          //     return -1;
          //   }
          // });
      
          const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
          console.table(ordered);
      
          // Array.prototype.reduce()
          // 4. How many years did all the inventors live?
          const totalYears = inventors.reduce((total, inventor) => {
            return total + (inventor.passed - inventor.year);
          }, 0);
      
          console.log(totalYears);
      
          // 5. Sort the inventors by years lived
          const oldest = inventors.sort(function(a, b) {
            const lastInventor = a.passed - a.year;
            const nextInventor = b.passed - b.year;
            return lastInventor > nextInventor ? -1 : 1;
          });
          console.table(oldest);
      
          // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
          // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      
          // const category = document.querySelector('.mw-category');
          // const links = Array.from(category.querySelectorAll('a'));
          // const de = links
          //             .map(link => link.textContent)
          //             .filter(streetName => streetName.includes('de'));
      
          // 7. sort Exercise
          // Sort the people alphabetically by last name
          const alpha = people.sort((lastOne, nextOne) => {
            const [aLast] = lastOne.split(', ');
            const [bLast] = nextOne.split(', ');
            return aLast > bLast ? 1 : -1;
          });
          console.log(alpha);
      
          // 8. Reduce Exercise
          // Sum up the instances of each of these
          const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
      
          const transportation = data.reduce(function(obj, item) {
            if (!obj[item]) {
              obj[item] = 0;
            }
            obj[item]++;
            return obj;
          }, {});
      
          console.log(transportation);
        `;
		this.htmlOutput = Prism.highlight(this.codeString, Prism.languages.javascript, 'javascript');
		this.runExample();
	}
	/** 이벤트 리스너 영역 **/
	// 컴포넌트 마운트 완료 후
	componentDidMount() {
		this.outputArea.current.innerHTML = this.htmlOutput;
	}

	// 예제 실행하기
	runExample() {
		const inventors = [
			{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
			{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
			{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
			{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
			{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
			{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
			{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
			{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
			{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
			{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
			{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
			{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
		];

		const people = [
			'Beck, Glenn',
			'Becker, Carl',
			'Beckett, Samuel',
			'Beddoes, Mick',
			'Beecher, Henry',
			'Beethoven, Ludwig',
			'Begin, Menachem',
			'Belloc, Hilaire',
			'Bellow, Saul',
			'Benchley, Robert',
			'Benenson, Peter',
			'Ben-Gurion, David',
			'Benjamin, Walter',
			'Benn, Tony',
			'Bennington, Chester',
			'Benson, Leana',
			'Bent, Silas',
			'Bentsen, Lloyd',
			'Berger, Ric',
			'Bergman, Ingmar',
			'Berio, Luciano',
			'Berle, Milton',
			'Berlin, Irving',
			'Berne, Eric',
			'Bernhard, Sandra',
			'Berra, Yogi',
			'Berry, Halle',
			'Berry, Wendell',
			'Bethea, Erin',
			'Bevan, Aneurin',
			'Bevel, Ken',
			'Biden, Joseph',
			'Bierce, Ambrose',
			'Biko, Steve',
			'Billings, Josh',
			'Biondo, Frank',
			'Birrell, Augustine',
			'Black Elk',
			'Blair, Robert',
			'Blair, Tony',
			'Blake, William'
		];

		// Array.prototype.filter()
		// 1. Filter the list of inventors for those who were born in the 1500's
		const fifteen = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
		console.table(fifteen);

		// Array.prototype.map()
		// 2. Give us an array of the inventor first and last names
		const fullNames = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
		console.log(fullNames);

		// Array.prototype.sort()
		// 3. Sort the inventors by birthdate, oldest to youngest
		// const ordered = inventors.sort(function(a, b) {
		//   if(a.year > b.year) {
		//     return 1;
		//   } else {
		//     return -1;
		//   }
		// });

		const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
		console.table(ordered);

		// Array.prototype.reduce()
		// 4. How many years did all the inventors live?
		const totalYears = inventors.reduce((total, inventor) => {
			return total + (inventor.passed - inventor.year);
		}, 0);

		console.log(totalYears);

		// 5. Sort the inventors by years lived
		const oldest = inventors.sort(function(a, b) {
			const lastInventor = a.passed - a.year;
			const nextInventor = b.passed - b.year;
			return lastInventor > nextInventor ? -1 : 1;
		});
		console.table(oldest);

		// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
		// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

		// const category = document.querySelector('.mw-category');
		// const links = Array.from(category.querySelectorAll('a'));
		// const de = links
		//             .map(link => link.textContent)
		//             .filter(streetName => streetName.includes('de'));

		// 7. sort Exercise
		// Sort the people alphabetically by last name
		const alpha = people.sort((lastOne, nextOne) => {
			const [ aLast ] = lastOne.split(', ');
			const [ bLast ] = nextOne.split(', ');
			return aLast > bLast ? 1 : -1;
		});
		console.log(alpha);

		// 8. Reduce Exercise
		// Sum up the instances of each of these
		const data = [
			'car',
			'car',
			'truck',
			'truck',
			'bike',
			'walk',
			'car',
			'van',
			'bike',
			'walk',
			'car',
			'van',
			'car',
			'truck',
			'pogostick'
		];

		const transportation = data.reduce((obj: any, item) => {
			if (!obj[item]) {
				obj[item] = 0;
			}
			obj[item]++;
			return obj;
		}, {});

		console.log(transportation);
	}

	/** View **/
	render() {
		return (
			<div className='day4'>
				<h2>
					<em>Please have a look at the JavaScript Console</em>{' '}
					<span role='img' aria-label='sheep'>
						{' '}
						💁
					</span>
				</h2>
				<pre>
					<code className='language-javascript'>
						<div ref={this.outputArea} />
					</code>
				</pre>
			</div>
		);
	}
}

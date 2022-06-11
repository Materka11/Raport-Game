document.addEventListener('DOMContentLoaded', function() {
	//zmienne
	const icon = document.querySelectorAll('.icon');
	const page = document.querySelector('#page');
	const notepad = document.querySelector('#notepad');
	const rules = document.querySelector('#rules');
	const mini = document.querySelector('#mini');
	const maks = document.querySelector('#maks');
	const close = document.querySelector('#close');
	const start = document.querySelector('#start');
	const report = document.querySelectorAll('.mainReport');
	const phone = document.querySelector('.phone');
	const time = document.querySelectorAll('.time');
	const date = document.querySelectorAll('.date');
	const block = document.querySelectorAll('.screenBlock');
	const lock = document.querySelectorAll('.screenBlock .fa-lock');
	const timeHome = document.querySelectorAll('.timeHome');
	const iconTopHome = document.querySelectorAll('.iconTopHome');
	const calendar = document.querySelectorAll('.calendar');
	const iconHomeDiv = document.querySelectorAll('#iconHome div');
	const iconBottom = document.querySelectorAll('.iconBottom');
	const dot = document.querySelectorAll('.dot');
	const iconSafari = document.querySelectorAll('.iconSafari');
	const safari = document.querySelectorAll('.safari');
	const bottomSafari = document.querySelectorAll('.bottomSafari');
	const topSafari = document.querySelectorAll('.topSafari');
	const homePage = document.querySelectorAll('.homePage');
	const buttonSafari = document.querySelectorAll('.closeApp');
	const iconBookmarks = document.querySelectorAll('.iconBookmarks');
	const bookmarks = document.querySelectorAll('.bookmarks');
	const mouseup = document.querySelectorAll('.mouseupDiv');
	const bookmarksButton = document.querySelectorAll('.buttonBookmarks');
	const historyButton = document.querySelectorAll('.bookmarks .history');
	const whiteBookmarks = document.querySelectorAll('.bookmarks button .first');
	const whiteHistory = document.querySelectorAll('.bookmarks button .last');
	const borderGlasses = document.querySelectorAll('.bookmarks .border');
	const titleBookmarks = document.querySelectorAll('.bookmarks .titleBookmarksIn');
	const editBookmarks = document.querySelectorAll('.bottomBookmarks a');
	const middleBookmarks = document.querySelectorAll('.middleBookmarks');
	const middleHistory = document.querySelectorAll('.middleHistory');
	const hidenDiv = document.querySelectorAll('.hiden');
	const done = document.querySelectorAll('.done');
	const iconMessage = document.querySelectorAll('.iconMessage');
	const message = document.querySelectorAll('.message');
	const mouseupMessage = document.querySelectorAll('.mouseupMessage');
	const buttonMessage = document.querySelectorAll('.message button');
	const details = document.querySelectorAll('.details');
	const closeDetails = document.querySelectorAll('.closeDetails');
	const buttonPost = document.querySelectorAll('.titlePost');
	const buttonCaseFiles = document.querySelectorAll('.titleCaseFiles');
	const Posts = document.querySelectorAll('.postAll');
	const CaseFiles = document.querySelectorAll('.caseFilesAll');
	const smallTitleMessage01 = document.querySelectorAll('.smallTitleMessage01');
	const detailsMessage01 = document.querySelectorAll('.detailsMessage01');
	const avatarDetailsMessageBack01 = document.querySelectorAll('.avatarDetailsMessage01 h3');
	const smallTitleMessage02 = document.querySelectorAll('.smallTitleMessage02');
	const detailsMessage02 = document.querySelectorAll('.detailsMessage02');
	const avatarDetailsMessageBack02 = document.querySelectorAll('.avatarDetailsMessage02 h3');
	const smallTitleMessage03 = document.querySelectorAll('.smallTitleMessage03');
	const detailsMessage03 = document.querySelectorAll('.detailsMessage03');
	const avatarDetailsMessageBack03 = document.querySelectorAll('.avatarDetailsMessage03 h3');
	const smallTitleMessage04 = document.querySelectorAll('.smallTitleMessage04');
	const detailsMessage04 = document.querySelectorAll('.detailsMessage04');
	const avatarDetailsMessageBack04 = document.querySelectorAll('.avatarDetailsMessage04 h3');

	//lapanie elementow
	for (let e of icon) {
		dragElement(e);
	}

	dragElement(notepad);

	for (let e of report) {
		dragElement(e);
	}

	for (let e of details) {
		dragElement(e);
	}

	function dragElement(element) {
		let pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0,
			//wysokosc i szerokosc strony
			posPageX = page.clientWidth,
			posPageY = page.clientHeight;
		if (element) {
			element.onmousedown = dragMouseDown;
		} else {
			element.onmousedown = dragMouseDown;
		}

		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
		}

		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// oblicznie nowej pozycji kursora:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			//obliczanie wysokosci i szerkosci elementu
			let posElementX = element.clientWidth / 2;
			let posElementY = element.clientHeight / 2;
			//roznica miedzy strona a elemenetem
			let differenceX = posPageX - posElementX;
			let differenceY = posPageY - posElementY;
			if (differenceX > pos3 && differenceY > pos4) {
				// ustawienie elementu na nowej pozycji:
				element.style.top = element.offsetTop - pos2 + 'px';
				element.style.left = element.offsetLeft - pos1 + 'px';
				element.style.zIndex = '99';
			} else {
				closeDragElement();
			}
		}

		function closeDragElement() {
			/* przestań się poruszać po zwolnieniu przycisku myszy:*/
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}

	//zamykanie badz otwieranie
	rules.addEventListener('dblclick', function() {
		notepad.style.opacity = '1';
		notepad.style.pointerEvents = 'auto';
		notepad.style.display = 'grid';
	});

	mini.addEventListener('click', function() {
		notepad.style.opacity = '0';
		notepad.style.pointerEvents = 'none';
		notepad.style.display = 'none';
	});

	maks.addEventListener('click', function() {
		notepad.classList.toggle('max');
	});

	close.addEventListener('click', function() {
		notepad.style.opacity = '0';
		notepad.style.pointerEvents = 'none';
		notepad.style.display = 'none';
	});

	//otwieranie details
	const buttonDetails01 = document.querySelector('#buttonDetails01');
	const details01 = document.querySelector('#details01');

	buttonDetails01.addEventListener('click', function() {
		details01.style.opacity = '1';
		details01.style.pointerEvents = 'auto';
		details01.style.display = 'grid';
	});

	const buttonDetails02 = document.querySelector('#buttonDetails02');
	const details02 = document.querySelector('#details02');

	buttonDetails02.addEventListener('click', function() {
		details02.style.opacity = '1';
		details02.style.pointerEvents = 'auto';
		details02.style.display = 'grid';
	});

	const buttonDetails03 = document.querySelector('#buttonDetails03');
	const details03 = document.querySelector('#details03');

	buttonDetails03.addEventListener('click', function() {
		details03.style.opacity = '1';
		details03.style.pointerEvents = 'auto';
		details03.style.display = 'grid';
	});

	const buttonDetails04 = document.querySelector('#buttonDetails04');
	const details04 = document.querySelector('#details04');

	buttonDetails04.addEventListener('click', function() {
		details04.style.opacity = '1';
		details04.style.pointerEvents = 'auto';
		details04.style.display = 'grid';
	});

	const buttonDetails05 = document.querySelector('#buttonDetails05');
	const details05 = document.querySelector('#details05');

	buttonDetails05.addEventListener('click', function() {
		details05.style.opacity = '1';
		details05.style.pointerEvents = 'auto';
		details05.style.display = 'grid';
	});

	const buttonDetails06 = document.querySelector('#buttonDetails06');
	const details06 = document.querySelector('#details06');

	buttonDetails06.addEventListener('click', function() {
		details06.style.opacity = '1';
		details06.style.pointerEvents = 'auto';
		details06.style.display = 'grid';
	});

	const buttonDetails07 = document.querySelector('#buttonDetails07');
	const details07 = document.querySelector('#details07');

	buttonDetails07.addEventListener('click', function() {
		details07.style.opacity = '1';
		details07.style.pointerEvents = 'auto';
		details07.style.display = 'grid';
	});

	const buttonDetails08 = document.querySelector('#buttonDetails08');
	const details08 = document.querySelector('#details08');

	buttonDetails08.addEventListener('click', function() {
		details08.style.opacity = '1';
		details08.style.pointerEvents = 'auto';
		details08.style.display = 'grid';
	});

	const buttonDetails09 = document.querySelector('#buttonDetails09');
	const details09 = document.querySelector('#details09');

	buttonDetails09.addEventListener('click', function() {
		details09.style.opacity = '1';
		details09.style.pointerEvents = 'auto';
		details09.style.display = 'grid';
	});

	const buttonDetails10 = document.querySelector('#buttonDetails10');
	const details10 = document.querySelector('#details10');

	buttonDetails10.addEventListener('click', function() {
		details10.style.opacity = '1';
		details10.style.pointerEvents = 'auto';
		details10.style.display = 'grid';
	});

	//zamykanie details
	for (c of closeDetails) {
		c.addEventListener('click', function() {
			for (d of details) {
				d.style.opacity = '0';
				d.style.pointerEvents = 'none';
				d.style.display = 'none';
			}
		});
	}

	//czas w telefonie
	const div1 = document.querySelectorAll('.calendar h1');
	const div2 = document.querySelectorAll('.calendar h2');

	//dwie cyfry
	function leadingZero(i) {
		return i < 10 ? '0' + i : i;
	}

	//pokazanie czasu i daty
	function showTextTime() {
		const now = new Date();
		const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturday' ];
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		const textTime = `${now.getHours()}:${leadingZero(now.getMinutes())}`;
		const textDate = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
		const textCalendar1 = `${days[now.getDay()]}`;
		const textCalendar2 = `${now.getDate()}`;

		for (a of time) {
			a.innerHTML = textTime;
		}

		for (d of date) {
			d.innerHTML = textDate;
		}

		for (d of div1) {
			d.innerHTML = textCalendar1;
		}

		for (d of div2) {
			d.innerHTML = textCalendar2;
		}
	}

	setInterval(() => {
		showTextTime();
	}, 1000);

	//blokowanie zaznaczenia tekstu
	document.onselectstart = new Function('return false');
	function ds(e) {
		return false;
	}
	function ra() {
		return true;
	}
	document.onmousedown = ds;
	document.onclick = ra;

	//swipe up w iphone
	for (b of block) {
		b.addEventListener('click', function() {
			for (b of block) {
				b.classList.toggle('click');
			}

			for (l of lock) {
				l.classList.remove('fa-lock');
				l.classList.add('fa-lock-open');
			}

			for (t of timeHome) {
				t.classList.toggle('click');
			}

			for (i of iconTopHome) {
				i.classList.toggle('click');
			}

			for (a of iconHomeDiv) {
				a.classList.toggle('click');
			}

			for (i of iconBottom) {
				i.classList.toggle('click');
			}

			for (d of dot) {
				d.classList.toggle('click');
			}
		});
	}

	//safari
	for (i of iconSafari) {
		i.addEventListener('click', function() {
			for (s of safari) {
				s.classList.toggle('click');
			}
		});
	}

	//zamykanie safari
	for (m of mouseup) {
		m.addEventListener('mouseup', function() {
			for (s of safari) {
				s.classList.toggle('mouseup');
			}

			for (t of topSafari) {
				t.classList.toggle('mouseup');
			}

			for (b of bottomSafari) {
				b.classList.toggle('mouseup');
			}

			for (h of homePage) {
				h.classList.toggle('mouseup');
			}

			for (b of buttonSafari) {
				b.classList.toggle('mouseup');
			}
		});
	}

	for (b of buttonSafari) {
		b.addEventListener('click', function() {
			for (s of safari) {
				s.classList.remove('click', 'mouseup');
			}

			for (b of bottomSafari) {
				b.classList.remove('mouseup');
			}

			for (t of topSafari) {
				t.classList.remove('mouseup');
			}

			for (h of homePage) {
				h.classList.remove('mouseup');
			}

			for (b of buttonSafari) {
				b.classList.remove('mouseup');
			}
		});
	}

	//przelaczanie na zakladki
	for (i of iconBookmarks) {
		i.addEventListener('click', function() {
			for (b of bookmarks) {
				b.classList.toggle('click');
			}
		});
	}

	//przelacznie na zakladki (bialy pasek na gorze)
	for (b of bookmarksButton) {
		b.addEventListener('click', function() {
			for (w of whiteBookmarks) {
				w.style.zIndex = '1';
			}

			for (w of whiteHistory) {
				w.style.zIndex = '-1';
			}

			for (b of borderGlasses) {
				b.style.borderRight = '1px #bfbfbf solid';
				b.style.borderLeft = 'none';
			}

			for (t of titleBookmarks) {
				t.innerHTML = 'Bookmarks';
			}

			for (e of editBookmarks) {
				e.innerHTML = 'Edit';
			}

			for (m of middleBookmarks) {
				m.style.display = 'grid';
			}

			for (m of middleHistory) {
				m.style.display = 'none';
			}

			for (div of hidenDiv) {
				div.style.display = 'none';
			}
		});
	}

	//przelaczanie na historie
	for (h of historyButton) {
		h.addEventListener('click', function() {
			for (w of whiteBookmarks) {
				w.style.zIndex = '-1';
			}

			for (w of whiteHistory) {
				w.style.zIndex = '1';
			}

			for (b of borderGlasses) {
				b.style.borderLeft = '1px #bfbfbf solid';
				b.style.borderRight = 'none';
			}

			for (t of titleBookmarks) {
				t.innerHTML = 'History';
			}

			for (e of editBookmarks) {
				e.innerHTML = 'Clear';
			}

			for (m of middleBookmarks) {
				m.style.display = 'none';
			}

			for (m of middleHistory) {
				m.style.display = 'grid';
			}

			for (div of hidenDiv) {
				div.style.display = 'block';
			}
		});
	}

	//wylaczanie bookmarksa
	for (d of done) {
		d.addEventListener('click', function() {
			for (b of bookmarks) {
				b.classList.remove('click');
			}
		});
	}

	//message
	for (i of iconMessage) {
		i.addEventListener('click', function() {
			for (m of message) {
				m.classList.toggle('click');
			}
		});
	}

	//zamykanie wiadomosci
	for (m of mouseupMessage) {
		m.addEventListener('mouseup', function() {
			for (m of message) {
				m.classList.toggle('mouseup');
			}

			for (h of homePage) {
				h.classList.toggle('mouseup');
			}

			for (b of buttonMessage) {
				b.classList.toggle('mouseup');
			}
		});
	}

	for (b of buttonMessage) {
		b.addEventListener('click', function() {
			for (m of message) {
				m.classList.remove('click', 'mouseup');
			}

			for (h of homePage) {
				h.classList.remove('mouseup');
			}

			for (b of buttonMessage) {
				b.classList.remove('mouseup');
			}
		});
	}

	//otwieranie szczegolow wiadomosci
	for (title of smallTitleMessage01) {
		title.addEventListener('click', function() {
			for (d of detailsMessage01) {
				d.classList.toggle('click');
			}
		});
	}

	for (title of smallTitleMessage02) {
		title.addEventListener('click', function() {
			for (d of detailsMessage02) {
				d.classList.toggle('click');
			}
		});
	}

	for (title of smallTitleMessage03) {
		title.addEventListener('click', function() {
			for (d of detailsMessage03) {
				d.classList.toggle('click');
			}
		});
	}

	for (title of smallTitleMessage04) {
		title.addEventListener('click', function() {
			for (d of detailsMessage04) {
				d.classList.toggle('click');
			}
		});
	}

	//zamykanie szczegolow wiadomosci
	for (a of avatarDetailsMessageBack01) {
		a.addEventListener('click', function() {
			for (d of detailsMessage01) {
				d.classList.remove('click');
			}
		});
	}

	for (a of avatarDetailsMessageBack02) {
		a.addEventListener('click', function() {
			for (d of detailsMessage02) {
				d.classList.remove('click');
			}
		});
	}

	for (a of avatarDetailsMessageBack03) {
		a.addEventListener('click', function() {
			for (d of detailsMessage03) {
				d.classList.remove('click');
			}
		});
	}

	for (a of avatarDetailsMessageBack04) {
		a.addEventListener('click', function() {
			for (d of detailsMessage04) {
				d.classList.remove('click');
			}
		});
	}

	//przelaczanie posty i akty
	for (b of buttonPost) {
		b.addEventListener('click', function() {
			for (p of Posts) {
				p.style.zIndex = '2';
			}

			for (c of CaseFiles) {
				c.style.zIndex = '1';
			}

			for (b of buttonPost) {
				b.style.zIndex = '4';
				b.style.margin = '0';
			}

			for (b of buttonCaseFiles) {
				b.style.zIndex = '3';
				b.style.margin = '1px';
			}
		});
	}

	for (b of buttonCaseFiles) {
		b.addEventListener('click', function() {
			for (p of Posts) {
				p.style.zIndex = '1';
			}

			for (c of CaseFiles) {
				c.style.zIndex = '2';
			}

			for (b of buttonCaseFiles) {
				b.style.zIndex = '4';
				b.style.margin = '0';
			}

			for (b of buttonPost) {
				b.style.zIndex = '3';
				b.style.margin = '1px';
			}
		});
	}

	const game = {
		failAttempts: 2, //nieudane proby
		succAttempts: 3, //udane proby
		report01: document.querySelector('#report01'),
		report02: document.querySelector('#report02'),
		report03: document.querySelector('#report03'),
		report04: document.querySelector('#report04'),
		report05: document.querySelector('#report05'),
		report06: document.querySelector('#report06'),
		report07: document.querySelector('#report07'),
		report08: document.querySelector('#report08'),
		report09: document.querySelector('#report09'),
		report10: document.querySelector('#report10'),
		reports: [ report01, report02, report03, report04, report05, report06, report07, report08, report09, report10 ], //tablica we wszystkimi raportami
		currentReport: null, //aktualny(wylosowany) raport
		complete: document.querySelector('#complete'), //komunikat po wygranej
		over: document.querySelector('#over'), //komunikat po przegranej

		randomReport() {
			//wylosowanie raportu
			const random = Math.floor(Math.random() * this.reports.length); //randomowa liczba z tablicy
			this.currentReport = this.reports.splice(random, 1); //usuniety raport z tablicy = aktualny raport
		},

		appearReport() {
			//pojawienie raportu
			this.currentReport[0].style.display = 'grid';
		},

		disapperReport() {
			//znikanie raportu
			this.currentReport[0].style.display = 'none';
		},

		reportCorrect() {
			//kiedy report jest poprawny
			this.succAttempts = this.succAttempts - 1; //odejmuje liczby do wygranej
			this.currentReport[0].style.display = 'none';
			this.randomReport(); //wylosowanie raportu
			this.appearReport(); //pojawnienie raportu
			this.gameComplete(); //wygranie gry
			this.gameOver(); //przegranie gry
		},

		reportIncorrect() {
			//kiedy report jest niepoprawny
			this.failAttempts = this.failAttempts - 1; //odejmuje liczby do przegranej
			this.currentReport[0].style.display = 'none';
			this.randomReport();
			this.appearReport();
			this.gameComplete();
			this.gameOver();
		},

		shredderCorrect() {
			//kiedy shredder jest poprawny
			this.succAttempts = this.succAttempts - 1;
			this.currentReport[0].style.display = 'none';
			this.randomReport();
			this.appearReport();
			this.gameComplete();
			this.gameOver();
		},

		shredderIncorrect() {
			//kiedy shredder jest niepoprawny
			this.failAttempts = this.failAttempts - 1;
			this.currentReport[0].style.display = 'none';
			this.randomReport();
			this.appearReport();
			this.gameComplete();
			this.gameOver();
		},

		gameComplete() {
			//wygranie gry
			if (this.succAttempts <= 0) {
				this.disapperReport();
				this.complete.style.display = 'block';
			}
		},

		gameOver() {
			//przgranie gry
			if (this.failAttempts <= 0) {
				this.disapperReport();
				this.over.style.display = 'block';
			}
		},

		startGame() {
			//start gry
			this.randomReport(); //wylosowanie raportu
			this.appearReport(); //pojawienie raportu
			this.failAttempts = 2; //nieudane proby
			this.succAttempts = 3; //udane proby
		}
	};

	//start gry po nacisnieciu ikony
	start.addEventListener('dblclick', function() {
		game.startGame();
		start.style.pointerEvents = 'none';
	});

	//zmienne przyciskow w endgame
	const btnComplete = document.querySelector('#complete button');
	const btnOver = document.querySelector('#over button');

	//zagraj ponownie
	btnComplete.addEventListener('click', function() {
		window.setInterval(location.reload(true), s); //odswiezanie strony
	});

	//sprobuj ponownie
	btnOver.addEventListener('click', function() {
		window.setInterval(location.reload(true), s); //odswiezanie strony
	});

	//zmienne przyciskow
	const buttonReport01 = document.querySelector('#buttonReport01');
	const buttonShredder01 = document.querySelector('#buttonShredder01');
	const buttonReport02 = document.querySelector('#buttonReport02');
	const buttonShredder02 = document.querySelector('#buttonShredder02');
	const buttonReport03 = document.querySelector('#buttonReport03');
	const buttonShredder03 = document.querySelector('#buttonShredder03');
	const buttonReport04 = document.querySelector('#buttonReport04');
	const buttonShredder04 = document.querySelector('#buttonShredder04');
	const buttonReport05 = document.querySelector('#buttonReport05');
	const buttonShredder05 = document.querySelector('#buttonShredder05');
	const buttonReport06 = document.querySelector('#buttonReport06');
	const buttonShredder06 = document.querySelector('#buttonShredder06');
	const buttonReport07 = document.querySelector('#buttonReport07');
	const buttonShredder07 = document.querySelector('#buttonShredder07');
	const buttonReport08 = document.querySelector('#buttonReport08');
	const buttonShredder08 = document.querySelector('#buttonShredder08');
	const buttonReport09 = document.querySelector('#buttonReport09');
	const buttonShredder09 = document.querySelector('#buttonShredder09');
	const buttonReport10 = document.querySelector('#buttonReport10');
	const buttonShredder10 = document.querySelector('#buttonShredder10');

	buttonReport01.addEventListener('click', function() {
		game.reportCorrect();
	});

	buttonShredder01.addEventListener('click', function() {
		game.shredderIncorrect();
	});

	buttonReport02.addEventListener('click', function() {
		game.reportIncorrect();
	});

	buttonShredder02.addEventListener('click', function() {
		game.shredderCorrect();
	});

	buttonReport03.addEventListener('click', function() {
		game.reportCorrect();
	});

	buttonShredder03.addEventListener('click', function() {
		game.shredderIncorrect();
	});

	buttonReport04.addEventListener('click', function() {
		game.reportCorrect();
	});

	buttonShredder04.addEventListener('click', function() {
		game.shredderIncorrect();
	});

	buttonReport05.addEventListener('click', function() {
		game.reportIncorrect();
	});

	buttonShredder05.addEventListener('click', function() {
		game.shredderCorrect();
	});

	buttonReport06.addEventListener('click', function() {
		game.reportIncorrect();
	});

	buttonShredder06.addEventListener('click', function() {
		game.shredderCorrect();
	});

	buttonReport07.addEventListener('click', function() {
		game.reportCorrect();
	});

	buttonShredder07.addEventListener('click', function() {
		game.shredderIncorrect();
	});

	buttonReport08.addEventListener('click', function() {
		game.reportIncorrect();
	});

	buttonShredder08.addEventListener('click', function() {
		game.shredderCorrect();
	});

	buttonReport09.addEventListener('click', function() {
		game.reportCorrect();
	});

	buttonShredder09.addEventListener('click', function() {
		game.shredderIncorrect();
	});

	buttonReport10.addEventListener('click', function() {
		game.reportIncorrect();
	});

	buttonShredder10.addEventListener('click', function() {
		game.shredderCorrect();
	});
});

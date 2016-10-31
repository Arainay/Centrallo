'use strict';

(function () {
	var copyBtns = document.querySelectorAll('.entry__copy-btn'),
	    shareBtns = document.querySelectorAll('.entry__share-btn'),
	    copyLink = document.querySelectorAll('.entry__link'),
	    shareSocials = document.querySelectorAll('.entry__share-link'),
	    shareBtn = document.querySelector('.user-info__share'),
	    listIcons = document.querySelectorAll('.entry__list-icon'),
	    entryLists = document.querySelectorAll('.entry__list-transfer'),
	    overlay = document.querySelector('.overlay'),
	    addUser = document.querySelector('.user-info__add-user'),
	    visibleElement = void 0;

	document.querySelector('.download-app__close').addEventListener('click', function () {
		document.querySelector('.download-app').classList.add('hide');
	}, false);

	function hideElem(elem) {
		if (visibleElement !== undefined && !visibleElement.classList.contains('hide') && visibleElement !== elem) visibleElement.classList.add('hide');

		elem.classList.toggle('hide');
		if (!elem.classList.contains('hide')) visibleElement = elem;
	}

	function showShareBlock(elem) {
		elem = elem || 'default';
		overlay.classList.remove('hide');
		shareBtn.classList.add('popup');
		addUser.classList.add('user-info__add-user--wide');
		shareBtn.querySelector('.user-info__share-content').classList.remove('hide');
		shareBtn.querySelector('.user-info__share-link>.selection').innerHTML = elem === 'default' ? window.location.href : elem.innerHTML;
	}

	function execute(share, copy) {
		window.innerWidth >= 768 ? hideElem(share) : showShareBlock(copy);
	}

	function copyRange(elem) {
		if (document.createRange) {
			var range = document.createRange();
			range.selectNode(elem);
			window.getSelection().addRange(range);
			document.execCommand('copy');
		}
	}

	var _loop = function _loop(i) {
		shareBtns[i].addEventListener('click', function () {
			execute(shareSocials[i], copyLink[i]);
		}, false);
		copyBtns[i].addEventListener('click', function () {
			execute(copyLink[i], copyLink[i]);
			copyRange(copyLink[i]);
		}, false);
	};

	for (var i = 0; i < copyBtns.length; i++) {
		_loop(i);
	}

	var _loop2 = function _loop2(_i) {
		listIcons[_i].addEventListener('click', function () {
			hideElem(entryLists[_i]);
		}, false);
	};

	for (var _i = 0; _i < listIcons.length; _i++) {
		_loop2(_i);
	}

	shareBtn.addEventListener('click', function (e) {
		if (e.target !== document.querySelector('.user-info__share-close')) {
			!shareBtn.classList.contains('popup') && showShareBlock();
		} else {
			overlay.classList.add('hide');
			shareBtn.classList.remove('popup');
			addUser.classList.remove('user-info__add-user--wide');
			shareBtn.querySelector('.user-info__share-content').classList.add('hide');
		}
	}, false);
})();
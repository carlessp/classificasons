document.addEventListener('DOMContentLoaded', () => {
  // 1. Dades d'imatges
  const totesLesImatges = [
    { nom: "amanida", ruta: "https://static.arasaac.org/pictograms/2377/2377_300.png", transcripcio: ["ə", "m", "ə", "n", "i", "ð", "ə"] },
    { nom: "banyador", ruta: "https://static.arasaac.org/pictograms/2601/2601_300.png", transcripcio: ["b", "ə", "ɲ", "ə", "ð", "o"] },
    { nom: "cadena", ruta: "https://static.arasaac.org/pictograms/8051/8051_300.png", transcripcio: ["k", "ə", "ð", "ɛ", "n", "ə"] },
    { nom: "dau", ruta: "https://static.arasaac.org/pictograms/2731/2731_300.png", transcripcio: ["d", "a", "w"] },
    { nom: "davantal", ruta: "https://static.arasaac.org/pictograms/2366/2366_300.png", transcripcio: ["d", "ə", "β", "ə", "n", "t", "a", "l"] },
    { nom: "balena", ruta: "https://static.arasaac.org/pictograms/2268/2268_300.png", transcripcio: ["b", "ə", "l", "ɛ", "n", "ə"] },
    { nom: "colze", ruta: "https://static.arasaac.org/pictograms/2707/2707_300.png", transcripcio: ["k", "ɔ", "l", "z", "ə"] },
    { nom: "galeta", ruta: "https://static.arasaac.org/pictograms/3331/3331_300.png", transcripcio: ["g", "ə", "l", "ɛ", "t", "ə"] },
    { nom: "lavabo", ruta: "https://static.arasaac.org/pictograms/2441/2441_300.png", transcripcio: ["l", "ə", "β", "a", "β", "u"] },
    { nom: "cara", ruta: "https://static.arasaac.org/pictograms/2684/2684_300.png", transcripcio: ["k", "a", "ɾ", "ə"] },
    { nom: "caramel", ruta: "https://static.arasaac.org/pictograms/2686/2686_300.png", transcripcio: ["k", "ə", "ɾ", "m", "ɛ", "l"] },
    { nom: "cargol", ruta: "https://static.arasaac.org/pictograms/2685/2685_300.png", transcripcio: ["k", "ə", "ɾ", "g", "ɔ", "l"] },
    { nom: "cinturo", ruta: "https://static.arasaac.org/pictograms/2336/2336_300.png", transcripcio: ["s", "i", "n", "t", "u", "ɾ", "o"] },
    { nom: "toro", ruta: "https://static.arasaac.org/pictograms/2595/2595_300.png", transcripcio: ["t", "ɔ", "ɾ", "u"] },
    { nom: "esquirol", ruta: "https://static.arasaac.org/pictograms/2257/2257_300.png", transcripcio: ["ə", "s", "k", "i", "ɾ", "ɔ", "l"] },
    { nom: "escala", ruta: "https://static.arasaac.org/pictograms/2379/2379_300.png", transcripcio: ["ə", "s", "k", "a", "l", "ə"] },
    { nom: "sabates", ruta: "https://static.arasaac.org/pictograms/2622/2622_300.png", transcripcio: ["s", "ə", "β", "a", "t", "ə", "s"] },
    { nom: "sabó", ruta: "https://static.arasaac.org/pictograms/2964/2964_300.png", transcripcio: ["s", "ə", "b", "o"] },
    { nom: "samarreta", ruta: "https://static.arasaac.org/pictograms/2309/2309_300.png", transcripcio: ["s", "ə", "m", "ə", "ɾ", "ɛ", "t", "ə"] },
    { nom: "assecador", ruta: "https://static.arasaac.org/pictograms/2560/2560_300.png", transcripcio: ["ə", "s", "ə", "k", "ə", "ð", "o"] },
    { nom: "cassola", ruta: "https://static.arasaac.org/pictograms/3231/3231_300.png", transcripcio: ["k", "ə", "s", "ɔ", "l", "ə"] },
    { nom: "sopa", ruta: "https://static.arasaac.org/pictograms/2573/2573_300.png", transcripcio: ["s", "o", "p", "ə"] },
    { nom: "tassa", ruta: "https://static.arasaac.org/pictograms/2581/2581_300.png", transcripcio: ["t", "a", "s", "ə"] },
    { nom: "foca", ruta: "https://static.arasaac.org/pictograms/2397/2397_300.png", transcripcio: ["f", "o", "k", "ə"] },
    { nom: "formiga", ruta: "https://static.arasaac.org/pictograms/2425/2425_300.png", transcripcio: ["f", "u", "ɾ", "m", "i", "ɣ", "ə"] },
    { nom: "semàfor", ruta: "https://static.arasaac.org/pictograms/2567/2567_300.png", transcripcio: ["s", "ə", "m", "a", "f", "u", "r"] },
    { nom: "foc", ruta: "https://static.arasaac.org/pictograms/4654/4654_300.png", transcripcio: ["f", "ɔ", "k"] },
    { nom: "bolígraf", ruta: "https://static.arasaac.org/pictograms/2282/2282_300.png", transcripcio: ["b", "u", "l", "i", "ɣ", "ɾ", "a", "f"] },
    { nom: "fotografia", ruta: "https://static.arasaac.org/pictograms/7107/7107_300.png", transcripcio: ["f", "u", "t", "u", "g", "ɾ", "ə", "f", "i", "ə"] },
    { nom: "telèfon", ruta: "https://static.arasaac.org/pictograms/25269/25269_300.png", transcripcio: ["t", "ə", "l", "ɛ", "f", "u", "n"] },
    { nom: "catifa", ruta: "https://static.arasaac.org/pictograms/2249/2249_300.png", transcripcio: ["k", "a", "t", "i", "f", "ə"] },
    { nom: "carxofa", ruta: "https://static.arasaac.org/pictograms/5370/5370_300.png", transcripcio: ["k", "ə", "ɾ", "ʃ", "ɔ", "f", "ə"] },
    { nom: "gallina", ruta: "https://static.arasaac.org/pictograms/2403/2403_300.png", transcripcio: ["g", "ə", "ʎ", "i", "n", "ə"] },
    { nom: "pastanaga", ruta: "https://static.arasaac.org/pictograms/2619/2619_300.png", transcripcio: ["p", "ə", "s", "t", "ə", "n","ə", "ɣ", "ə"] },
    { nom: "guitarra", ruta: "https://static.arasaac.org/pictograms/2417/2417_300.png", transcripcio: ["g", "i", "t", "a", "r","ə"] },
    { nom: "mandonguilles", ruta: "https://static.arasaac.org/pictograms/3249/3249_300.png", transcripcio: ["m", "ə", "n", "d", "u", "n","g", "i", "ʎ", "ə", "s"] },
    { nom: "bigoti", ruta: "https://static.arasaac.org/pictograms/2661/2661_300.png", transcripcio: ["b", "i", "ɣ", "ɔ", "t", "i"] },
    { nom: "cangur", ruta: "https://static.arasaac.org/pictograms/2313/2313_300.png", transcripcio: ["k", "ə", "n", "g", "u", "r"] },
  ];


  // 2. Elements del DOM - Capturem tots els elements del DOM un sol cop
  const categorySelectionOptions = document.getElementById('category-selection-options');
  const selectImagesButton = document.getElementById('select-images-button');
  const startButton = document.getElementById('start-button');
  const imagesModalOverlay = document.getElementById('images-modal-overlay');
  const wordsList = document.getElementById('words-list');
  const selectAllCheckbox = document.getElementById('select-all-words');
  const applyImagesSelection = document.getElementById('apply-images-selection');
  const cancelImagesSelection = document.getElementById('cancel-images-selection');
  const imageStack = document.querySelector('.image-stack');
  const gameDropZonesContainer = document.querySelector('#game-container .drop-zones');
  const startScreen = document.getElementById('start-screen');
  const gameContainer = document.getElementById('game-container');

  // Carrega d'àudios amb gestió d'errors
  const errorSound = new Audio('error.mp3'); // Ruta corregida
  const bloopSound = new Audio('bloop.mp3'); // Ruta corregida

  // Gestió d'errors d'àudio
  errorSound.addEventListener('error', () => console.error('No s\'ha pogut carregar el so d\'error'));
  bloopSound.addEventListener('error', () => console.error('No s\'ha pogut carregar el so de bloop'));

  // 3. Estat i globals - Definim totes les variables globals un sol cop
  let imagesForCurrentGame = [];
  let currentImageIndex = 0;
  let currentDropZones = [];
  let selectedCategoriesGlobal = [];
  let rFilterOptionGlobal = null;
  let selectedWordsGlobal = null;
  let modalContext = null;
  let currentTouchImage = null;
  let touchOffsetX = 0;
  let touchOffsetY = 0;
  let gameCompleted = false;

  // 4. Funcions auxiliars
  // Fisher-Yates per mesclar l'array
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // NOVA FUNCIÓ: Normalitza fonemes per a la comparació
  function normalizePhonemeForMatching(phoneme) {
    if (phoneme === 'ð') return 'd';
    if (phoneme === 'ɣ') return 'g'; // Compte: la 'g' de 'galeta' és g (U+0261), la de 'cargol' és g, la de 'formiga' és ɣ (U+0263)
    if (phoneme === 'β') return 'b';
    return phoneme;
  }


  // Renderitza els checkboxes de categories
  function renderCategorySelection(cats) {
    categorySelectionOptions.innerHTML = '';
    cats.forEach(cat => {
      const lbl = document.createElement('label');
      lbl.innerHTML = `
        <input type="checkbox" class="category-checkbox" value="${cat}"> ${cat.toUpperCase()}`;
      categorySelectionOptions.appendChild(lbl);
    });
  }

  // Gestors d'events touch
  function onTouchStart(e) {
    e.preventDefault();
    currentTouchImage = e.target;
    const touch = e.touches[0];
    const parentElement = currentTouchImage.parentElement;
    const imageRect = currentTouchImage.getBoundingClientRect();
    const parentRect = parentElement.getBoundingClientRect();

    touchOffsetX = touch.clientX - imageRect.left;
    touchOffsetY = touch.clientY - imageRect.top;

    const initialXRelativeToParent = imageRect.left - parentRect.left;
    const initialYRelativeToParent = imageRect.top - parentRect.top;

    currentTouchImage.style.position = 'absolute';
    currentTouchImage.style.left = `${initialXRelativeToParent}px`;
    currentTouchImage.style.top = `${initialYRelativeToParent}px`;
    currentTouchImage.style.zIndex = 1000;
    currentTouchImage.style.touchAction = 'none';
  }

  function onTouchMove(e) {
    e.preventDefault();
    if (!currentTouchImage) return;

    const touch = e.touches[0];
    const parentElement = currentTouchImage.parentElement;
    const parentRect = parentElement.getBoundingClientRect();

    const newLeft = touch.clientX - parentRect.left - touchOffsetX;
    const newTop = touch.clientY - parentRect.top - touchOffsetY;

    currentTouchImage.style.left = `${newLeft}px`;
    currentTouchImage.style.top = `${newTop}px`;
  }

  function onTouchEnd(e) {
    if (!currentTouchImage) return;
    const touch = e.changedTouches[0];
    currentTouchImage.style.pointerEvents = 'none';
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    currentTouchImage.style.pointerEvents = '';
    const dz = el && el.closest('.drop-zone');

    if (dz) {
      const zoneCat = dz.dataset.category;
      const trans = currentTouchImage.transcription; // Array de fonemes originals
      console.log("Transcripció imatge:", trans);
      console.log("Zona categoria:", zoneCat);

      let match = false;
      if (zoneCat === 'r') {
        if (!rFilterOptionGlobal || rFilterOptionGlobal === 'both') {
            match = trans.includes('r') || trans.includes('ɾ');
        } else {
            match = trans.includes(rFilterOptionGlobal);
        }
      } else {
        // MODIFICAT: Utilitza la normalització aquí
        match = trans.some(ph => normalizePhonemeForMatching(ph) === zoneCat);
      }
      
      console.log("Match found:", match);

      if (match) {
        placeImage(currentTouchImage, dz);
        bloopSound.play().catch(err => console.warn('Error al reproduir so:', err));
      } else {
        errorSound.play().catch(err => console.warn('Error al reproduir so:', err));
        currentTouchImage.classList.add('shake');
        setTimeout(() => currentTouchImage.classList.remove('shake'), 500);
        // Restaura estils només si no hi ha match, ja que placeImage el treu del DOM
        restoreImageStyles(currentTouchImage); 
      }
    } else {
        // Si no es deixa anar sobre una drop-zone, restaura igualment
        restoreImageStyles(currentTouchImage);
    }
    currentTouchImage = null;
  }


  function restoreImageStyles(imgEl) {
    if (!imgEl) return;
    imgEl.style.position = '';
    imgEl.style.left = '';
    imgEl.style.top = '';
    imgEl.style.zIndex = '';
    imgEl.style.touchAction = '';
  }

  function removeEventListeners(imgEl) {
    if (!imgEl) return;
    imgEl.removeEventListener('touchstart', onTouchStart);
    imgEl.removeEventListener('touchmove', onTouchMove);
    imgEl.removeEventListener('touchend', onTouchEnd);
  }

  function placeImage(imgEl, dz) {
    removeEventListeners(imgEl);

    const sm = document.createElement('img');
    sm.src = imgEl.src;
    sm.alt = imgEl.alt;
    sm.classList.add('small-image');
    dz.querySelector('.dropped-images').appendChild(sm);
    imgEl.remove(); // Això elimina l'element, per tant, no cal restoreImageStyles DESPRÉS d'això.
    currentImageIndex++;
    displayNextImage();
  }

  function openImagesModal() {
    const cats = Array.from(categorySelectionOptions.querySelectorAll('.category-checkbox'))
      .filter(cb => cb.checked).map(cb => cb.value);

    // MODIFICAT: Utilitza la normalització aquí per filtrar candidats
    const candidats = totesLesImatges.filter(img =>
      img.transcripcio.some(phOriginal => {
        // Primer, gestionem el cas especial de 'r' com abans
        if ((phOriginal === 'r' || phOriginal === 'ɾ') && cats.includes('r')) {
          if (!rFilterOptionGlobal || rFilterOptionGlobal === 'both') {
            return true; // Coincideix amb 'r' o 'ɾ' i la categoria 'r' està seleccionada
          }
          return phOriginal === rFilterOptionGlobal; // Coincideix amb el filtre específic de 'r'
        }
        // Per a la resta de fonemes o si 'r' no és la categoria actual, normalitzem i comprovem
        const phNormalitzat = normalizePhonemeForMatching(phOriginal);
        return cats.includes(phNormalitzat);
      })
    );

    wordsList.innerHTML = '';
    candidats.forEach(img => {
      const lbl = document.createElement('label');
      lbl.innerHTML = `<input type="checkbox" value="${img.nom}" checked> ${img.nom}`;
      wordsList.appendChild(lbl);
    });

    selectAllCheckbox.checked = true;
    imagesModalOverlay.classList.remove('hidden');
  }

  function proceedStart() {
    gameCompleted = false;

    // MODIFICAT: Utilitza la normalització aquí per filtrar imatges del joc
    let imgs = totesLesImatges.filter(img => {
      return img.transcripcio.some(phOriginal => {
        // Cas especial per 'r'
        if ((phOriginal === 'r' || phOriginal === 'ɾ') && selectedCategoriesGlobal.includes('r')) {
          if (!rFilterOptionGlobal || rFilterOptionGlobal === 'both') return true;
          return phOriginal === rFilterOptionGlobal;
        }
        // Per a la resta, normalitzem
        const phNormalitzat = normalizePhonemeForMatching(phOriginal);
        return selectedCategoriesGlobal.includes(phNormalitzat);
      });
    });

    if (Array.isArray(selectedWordsGlobal) && selectedWordsGlobal.length > 0) {
      imgs = imgs.filter(img => selectedWordsGlobal.includes(img.nom));
    }

    imagesForCurrentGame = imgs;

    if (!imagesForCurrentGame.length) {
      alert('No hi ha imatges per a aquests sons o paraules.');
      return;
    }

    addBackToMenuButton();
    renderDropZones(selectedCategoriesGlobal);
    shuffleArray(imagesForCurrentGame);
    currentImageIndex = 0;
    startScreen.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    displayNextImage();
  }

  function addBackToMenuButton() {
    const existingButton = document.getElementById('back-to-menu');
    if (existingButton) existingButton.remove();

    const backButton = document.createElement('button');
    backButton.id = 'back-to-menu';
    backButton.textContent = 'Torna';
    backButton.classList.add('back-button');
    backButton.addEventListener('click', () => {
      if (confirm('Vols tornar al menú principal? Perdràs el progrés actual.')) {
        resetGame();
      }
    });
    gameContainer.insertBefore(backButton, gameContainer.firstChild);
  }

  function renderDropZones(cats) {
    gameDropZonesContainer.innerHTML = '';
    currentDropZones = [];
    cats.forEach(cat => {
      const dz = document.createElement('div');
      dz.classList.add('drop-zone');
      dz.dataset.category = cat; // La categoria de la zona es manté com 'd', 'g', 'b'
      dz.innerHTML = `<h2>${cat.toUpperCase()}</h2><div class="dropped-images"></div>`;
      gameDropZonesContainer.appendChild(dz);
      currentDropZones.push(dz);

      dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('drag-over'); });
      dz.addEventListener('dragleave', () => dz.classList.remove('drag-over'));
      dz.addEventListener('drop', e => {
        e.preventDefault(); dz.classList.remove('drag-over');
        const zoneCat = dz.dataset.category;
        const imgEl = imageStack.querySelector('.draggable-image');
        if (imgEl) {
          const trans = imgEl.transcription; // Array de fonemes originals
          console.log("Transcripció imatge (drop):", trans);
          console.log("Zona categoria (drop):", zoneCat);
          let match = false;
          if (zoneCat === 'r') {
            if (!rFilterOptionGlobal || rFilterOptionGlobal === 'both') {
                match = trans.includes('r') || trans.includes('ɾ');
            } else {
                match = trans.includes(rFilterOptionGlobal);
            }
          } else {
            // MODIFICAT: Utilitza la normalització aquí
            match = trans.some(ph => normalizePhonemeForMatching(ph) === zoneCat);
          }
          console.log("Match found (drop):", match);

          if (match) {
            placeImage(imgEl, dz);
            bloopSound.play().catch(err => console.warn('Error al reproduir so:', err));
          } else {
            errorSound.play().catch(err => console.warn('Error al reproduir so:', err));
            imgEl.classList.add('shake');
            setTimeout(() => imgEl.classList.remove('shake'), 500);
            // No cal restoreImageStyles aquí perquè l'element no es mou del seu lloc original
          }
        }
      });
    });
  }

  function displayNextImage() {
    imageStack.innerHTML = '';

    if (currentImageIndex >= imagesForCurrentGame.length) {
      if (!gameCompleted) {
        gameCompleted = true;
        showGameCompleteMessage();
      }
      return;
    }

    const data = imagesForCurrentGame[currentImageIndex];
    const img = document.createElement('img');

    img.onerror = () => {
      console.error(`Error en carregar la imatge: ${data.nom}`);
      currentImageIndex++;
      displayNextImage();
    };

    img.src = data.ruta;
    img.alt = data.nom;
    img.classList.add('draggable-image');
    img.draggable = true;

    img.addEventListener('touchstart', onTouchStart, { passive: false });
    img.addEventListener('touchmove', onTouchMove, { passive: false });
    img.addEventListener('touchend', onTouchEnd);

    img.transcription = data.transcripcio; // Guardem la transcripció original a l'element
    img.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', ''));
    imageStack.appendChild(img);
  }

  function showGameCompleteMessage() {
    const existingMessage = document.querySelector('.game-complete-message');
    if (existingMessage) existingMessage.remove();

    const gameCompleteMessage = document.createElement('div');
    gameCompleteMessage.classList.add('game-complete-message');
    gameCompleteMessage.innerHTML = `
      <h2>Joc completat!</h2>
      <p>Has col·locat totes les imatges correctament.</p>
      <div class="game-complete-buttons">
        <button id="play-again">Jugar de nou</button>
        <button id="back-to-menu-complete">Tornar al menú</button>
      </div>
    `;
    gameContainer.appendChild(gameCompleteMessage);

    document.getElementById('play-again').addEventListener('click', () => {
      // No eliminem el missatge aquí, proceedStart netejarà si cal o es sobreescriurà
      proceedStart(); 
    });

    document.getElementById('back-to-menu-complete').addEventListener('click', resetGame);

    try {
      bloopSound.play();
      setTimeout(() => bloopSound.play(), 300);
      setTimeout(() => bloopSound.play(), 600);
    } catch (err) {
      console.warn('Error al reproduir so:', err);
    }
  }
  
  function resetGame() {
    const currentImage = imageStack.querySelector('.draggable-image');
    if (currentImage) {
      removeEventListeners(currentImage);
    }

    const gameCompleteMessage = document.querySelector('.game-complete-message');
    if (gameCompleteMessage) {
      gameCompleteMessage.remove();
    }

    selectedCategoriesGlobal = [];
    rFilterOptionGlobal = null;
    selectedWordsGlobal = null;
    gameCompleted = false;

    imageStack.innerHTML = '';
    gameDropZonesContainer.innerHTML = '';

    const allCategories = ['l', 'r', 'd', 's', 'f', 'g', 'k']; // Categories base per selecció
    renderCategorySelection(allCategories);
    gameContainer.classList.add('hidden');
    startScreen.classList.remove('hidden');

    const backButton = document.getElementById('back-to-menu');
    if (backButton) backButton.remove();
  }

  // 5. Creació dinàmica del modal per tipus de 'r'
  const modalOverlay = document.createElement('div');
  Object.assign(modalOverlay.style, {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'none',
    alignItems: 'center', justifyContent: 'center', zIndex: 1000
  });
  const modalBox = document.createElement('div');
  Object.assign(modalBox.style, {
    backgroundColor: '#fff', padding: '20px', borderRadius: '8px', textAlign: 'center', maxWidth: '320px'
  });
  modalBox.innerHTML = `
    <p>Quins sons amb 'r' vols incloure?</p>
    <button id="modal-both">r i ɾ</button>
    <button id="modal-only-r">Només r</button>
    <button id="modal-only-rr">Només ɾ</button>
  `;
  modalOverlay.appendChild(modalBox);
  document.body.appendChild(modalOverlay);

  // 6. Botons del modal de 'r'
  modalOverlay.querySelector('#modal-both').addEventListener('click', () => {
    rFilterOptionGlobal = 'both';
    modalOverlay.style.display = 'none';
    if (modalContext === 'images') {
      modalContext = null;
      openImagesModal();
    } else {
      proceedStart();
    }
  });
  modalOverlay.querySelector('#modal-only-r').addEventListener('click', () => {
    rFilterOptionGlobal = 'r';
    modalOverlay.style.display = 'none';
    if (modalContext === 'images') {
      modalContext = null;
      openImagesModal();
    } else {
      proceedStart();
    }
  });
  modalOverlay.querySelector('#modal-only-rr').addEventListener('click', () => {
    rFilterOptionGlobal = 'ɾ';
    modalOverlay.style.display = 'none';
    if (modalContext === 'images') {
      modalContext = null;
      openImagesModal();
    } else {
      proceedStart();
    }
  });

  // 7. Gestió modal de selecció d'imatges
  selectAllCheckbox.addEventListener('change', () => {
    const checks = wordsList.querySelectorAll('input[type="checkbox"]');
    checks.forEach(cb => cb.checked = selectAllCheckbox.checked);
  });

  cancelImagesSelection.addEventListener('click', () => {
    imagesModalOverlay.classList.add('hidden');
  });

  applyImagesSelection.addEventListener('click', () => {
    const checked = Array.from(wordsList.querySelectorAll('input[type="checkbox"]:checked'))
      .map(cb => cb.value);
    selectedWordsGlobal = checked;
    imagesModalOverlay.classList.add('hidden');
    // Ja tenim selectedCategoriesGlobal i rFilterOptionGlobal (si s'ha passat pel modal de 'r')
    proceedStart(); 
  });

  selectImagesButton.addEventListener('click', () => {
    const anyChecked = Array.from(categorySelectionOptions.querySelectorAll('.category-checkbox'))
      .some(cb => cb.checked);
    if (!anyChecked) {
      alert('Primer selecciona algun so.');
      return;
    }
    selectedCategoriesGlobal = Array.from(categorySelectionOptions.querySelectorAll('.category-checkbox'))
      .filter(cb => cb.checked).map(cb => cb.value);

    if (selectedCategoriesGlobal.includes('r')) {
      rFilterOptionGlobal = null; // Reseteja per si l'usuari canvia d'opinió
      modalContext = 'images';
      modalOverlay.style.display = 'flex';
    } else {
      rFilterOptionGlobal = null; // Assegura't que no hi ha filtre 'r' si no s'ha seleccionat
      modalContext = null;
      openImagesModal();
    }
  });

  // 8. Botó de comença
  startButton.addEventListener('click', () => {
    selectedCategoriesGlobal = Array.from(categorySelectionOptions.querySelectorAll('.category-checkbox'))
      .filter(cb => cb.checked).map(cb => cb.value);
    if (!selectedCategoriesGlobal.length) {
      alert('Selecciona almenys un so per jugar.');
      return;
    }
    selectedWordsGlobal = null; // Comença directe, sense selecció de paraules prèvia

    if (selectedCategoriesGlobal.includes('r')) {
      rFilterOptionGlobal = null; // Reseteja per si l'usuari canvia d'opinió
      modalContext = null; // No estem en context de "seleccionar imatges" sinó "començar joc"
      modalOverlay.style.display = 'flex';
    } else {
      rFilterOptionGlobal = null; // Assegura't que no hi ha filtre 'r' si no s'ha seleccionat
      proceedStart();
    }
  });

  // 9. Setup inicial
  const allCategories = ['l', 'r', 'd', 's', 'f', 'g', 'k']; // Mantén les categories base per a la selecció
  renderCategorySelection(allCategories);
  gameContainer.classList.add('hidden');
  startScreen.classList.remove('hidden');

  // 10. Utilitzem la funció fetch per verificar si els arxius d'àudio existeixen
  fetch('../sons/error.mp3')
    .catch(() => console.warn('Arxiu d\'àudio d\'error no trobat. És possible que el joc no funcioni correctament.'));

  fetch('../sons/bloop.mp3')
    .catch(() => console.warn('Arxiu d\'àudio de bloop no trobat. És possible que el joc no funcioni correctament.'));
});
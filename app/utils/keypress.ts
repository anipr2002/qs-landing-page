// export function simulateWordInput(inputRef: React.RefObject<HTMLInputElement>, letters: string) {
//     const typeLetter = (char: string, delay: number) => {
//       setTimeout(() => {
//         if (inputRef.current) {
//           inputRef.current.value += char;
//           inputRef.current.focus();
//         }
//       }, delay);
//     };

//     for (let i = 0; i < letters.length; i++) {
//       typeLetter(letters[i], i * 300);
//     }

//     // Simulating tab keypress by creating a keyboard event
//     const simulateTabKeyPress = (delay: number) => {
//       setTimeout(() => {
//         if (inputRef.current) {
//           const event = new KeyboardEvent("keydown", {
//             key: "Tab",
//             code: "Tab",
//             keyCode: 9,
//             charCode: 9,
//             bubbles: true,
//             cancelable: true,
//           });
//           inputRef.current.dispatchEvent(event);
//         }
//       }, delay);
//     };

//     simulateTabKeyPress(letters.length * 300);
//   }

//   export function simulateQueryInput(inputRef: React.RefObject<HTMLInputElement>, letters: string) {
//     const typeLetter = (char: string, delay: number) => {
//       setTimeout(() => {
//         if (inputRef.current) {
//           inputRef.current.value += char;
//           inputRef.current.focus();
//         }
//       }, delay);
//     };

//     for (let i = 0; i < letters.length; i++) {
//       typeLetter(letters[i], i * 300);
//     }
//   }


export function simulateWordInput(inputRef: React.RefObject<HTMLInputElement>, letters: string): Promise<void> {
  return new Promise((resolve) => {
    const typeLetter = (char: string, delay: number) => {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.value += char;
          inputRef.current.focus();
        }

        // Resolve the promise when all letters are typed
        if (delay === (letters.length - 1) * 300) {
          resolve();
        }
      }, delay);
    };

    for (let i = 0; i < letters.length; i++) {
      typeLetter(letters[i], i * 300);
    }

    // Simulating tab keypress by creating a keyboard event
    const simulateTabKeyPress = (delay: number) => {
      setTimeout(() => {
        if (inputRef.current) {
          const event = new KeyboardEvent("keydown", {
            key: "Tab",
            code: "Tab",
            keyCode: 9,
            charCode: 9,
            bubbles: true,
            cancelable: true,
          });
          inputRef.current.dispatchEvent(event);
        }
      }, delay);
    };

    simulateTabKeyPress(letters.length * 300);
  });
}

export function simulateQueryInput(inputRef: React.RefObject<HTMLInputElement>, letters: string): Promise<void> {
  return new Promise((resolve) => {
    const typeLetter = async (char: string, delay: number) => {
    
        //add a starting delay
        await new Promise((resolve) => setTimeout(resolve, 900));
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.value += char;
          inputRef.current.focus();
        }

        // Resolve the promise when all letters are typed
        if (delay === (letters.length - 1) * 300) {
          resolve();
        }
      }, delay);
    };

    for (let i = 0; i < letters.length; i++) {
      typeLetter(letters[i], i * 300);
    }
  });
}

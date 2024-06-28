let input = document.querySelector("#input");
// console.log(input.value);
let start = document.querySelector("#start");
let rule = document.querySelector("hr");
let graphArea = document.querySelector(".sorting");
start.addEventListener("click", () => {
  text = input.value.split(",");
  // console.log(text);
  const values = [];
  text.forEach((elem) => {
    values.push(parseInt(elem));
    graphArea.innerHTML += `<div class="values" style="--h:${parseInt(
      elem
    )}vw">${parseInt(elem)}</div>`;
  });
  rule.style.width = `${values.length * 4}vw`;
  let graphs = document.querySelectorAll(".values");
  const changeHeights = (i, j) => {
    graphs[i].style.height = `${values[i] + 2}vw`;
    graphs[i].innerText = `${values[i]}`;
    graphs[j].style.height = `${values[j] + 2}vw`;
    graphs[j].innerText = `${values[j]}`;
  };
  let flag = 1;
  function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  async function wait() {
    await sleep();
    console.log("waiting");
  }
  async function sort() {
    while (flag == 1) {
      console.log("hey");

      let n = values.length;
      flag = 0;
      let i = 0;
      let j = 1;
      while (j < n) {
        if (values[i] > values[j]) {
          let temp = values[i];
          values[i] = values[j];
          values[j] = temp;
          flag = 1;
          graphs[i].style.backgroundColor="black";
          graphs[j].style.backgroundColor="black";
          await wait();
          changeHeights(i, j);
          graphs[i].style.backgroundColor="blue";
          graphs[j].style.backgroundColor="blue";

        }

        i++;
        j++;
      }
      n--;
      await wait();
    }
  }
  console.log(values);
  sort();
});

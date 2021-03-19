#liner-task_client

#파일 구조

```
+--src
  +--component
    +--dropdown
    +--modal
  +--css
  +--image
+--fakeData
```

# 1. 공통 - header

- 과제 설명에 나와있는대로 버튼과 검색 바를 배치만 하였습니다.
- css로 버튼을 hover할 시 이펙트를 추가하였습니다.

# 2. 공통 - left menu

- state를 따로 지정하여, for you과 highlight 탭을 누를 시 각각 main page 영역이 다르게 렌더링 되도록 구현하였습니다.
- 처음 화면이 렌더링 될 때에는 for you 탭이 렌더링 되도록 초기화하였습니다.
- hooks를 이용해 state 설정과 변경을 구현하였습니다.

# 3. 우측 - Trending keywords, pages

- 우측에 Trending Keywords와 pages를 담을 수 있는 box 두 개를 구현하였습니다.
- left menu의 state 변경과 관련해서 변하지 않습니다.

# 4. For You 탭

- 처음 렌더링되거나 for you 탭을 클릭 시 메인 화면에 나오는 tab page입니다.
- 임의로 fake data를 만들어서 map을 통해 리스트로 나열하였습니다.
- title을 클릭하면 detail state가 true로 바뀌면서 detail page로 이동합니다.
- modal창과 dropdown menu는 component로 분리하였습니다.

# 5. My Highlight 탭

- 왼쪽의 highlight 탭을 클릭시 메인 화면에 나오는 tab page입니다.
- 임의로 data를 채워 넣었습니다.
- 각각에 맞는 dropdown menu를 구성하였고, search(돋보기 모양)버튼을 클릭하면 ui가 변화한 search mode가 렌더링 됩니다.
- 여기의 제목을 클릭하면 detail page로 넘어가지 않습니다.(시간 계산을 잘못하였습니다 죄송합니다 ㅠㅠ)

# 6. Detail page

- for you tab의 제목을 클릭하면 메인 화면에 나오는 tab page입니다.
- for you tab의 title을 클릭 시, selectedItem의 state가 클릭된 제목이 속해있는 배열 번호로 바뀌면서 detail page가 렌더링 됩니다.
- 오른쪽의 Trending XX 부분이 Relevant XX로 전환됩니다.
- 뒤로 가기 버튼을 누르면 detail state가 false로 전환되면서 다시 for you tab으로 이동합니다.
- 페이지 하단에 fakeData로 채워넣은 relevant page가 목록으로 표시됩니다.
- relevatn page의 제목을 클릭하면 그 제목의 detail page가 화면에 렌더링 됩니다.

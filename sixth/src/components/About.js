import React from "react";
import qs from "qs";

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPreFix: true, // 이설정을 통해 문자열 맨 앞의 ?를 생략한다.
  });
  const showDetail = query.detail === "true"; //쿼리의 파싱 결과 값은 문자열이다.
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트를 실습합니다</p>
      {showDetail && <p>detail값을 true로 설정하셨군요!</p>}
    </div>
  );
}

export default About;

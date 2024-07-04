import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map(mentor => {
        if(mentor.name === prev){
          return {...mentor, name: current}
        }

        return mentor
      })
    }));
  }
  const handleAdd = (direction = 'backward') => {
    const name = prompt('추가 할 이름을 입력하세요.');
    const title = prompt('추가 할 타이틀을 입력하세요.');

    setPerson((person) => ({
      ...person,
      mentors: direction === 'forward' ? [{name, title}, ...person.mentors,] : [ ...person.mentors, {name, title} ]
    }));

    console.log('person', person);
  }
  const handleDelete = () => {
    const name = prompt('삭제 할 이름을 입력하세요');

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter(mentor => mentor.name !== name)
    }))
  }

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        disabled={!person.mentors.length}
        onClick={handleUpdate}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={() => handleAdd('forward')}
      >
        멘토 앞에 추가하기
      </button>
      <button
        onClick={() => handleAdd()}
      >
        멘토 뒤에 추가하기
      </button>
      <button
        disabled={!person.mentors.length}
        onClick={handleDelete}
      >
        멘토 삭제하기
      </button>
    </div>
  );
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
}
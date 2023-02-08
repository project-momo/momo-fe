export const mypageProfile = {
   nickname: 'icyeong',
   email: 'hello@gamil.com',
   contactNumber: '010-1222-3333',
   point: 25000
};

export const host_dummyData = {
   content: [
      {
         meetingId: 1,
         category: '개발',
         host: {
            userId: 1,
            nickname: '내가주최자',
            imageUrl: 'https://7357.tistory.com/'
         },
         title: '개발 10년차가 전해 주는 멘토링',
         content:
            '멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.',
         address: ['서초구', '강남구'],
         meetingState: '모집중',
         isOpen: true,
         datePolicy: 'FREE',
         pricePolicy: '',
         price: 10000,
         applications: {
            requests: [
               {
                  userId: 1,
                  nickname: 'Icyeong',
                  imageUrl: 'https://7357.tistory.com',
                  reservationState: 'PAYMENT_SUCCESS',
                  dateTimeInfo: {
                     date: '2022.12.26',
                     time: '13:00 - 15:00 (2시간)'
                  },
                  message: '제가 코딩한게 있는데 보여드면서 코드리뷰 받고 싶습니다.'
               },
               {
                  userId: 2,
                  nickname: 'qqllqqll',
                  imageUrl: 'https://7357.tistory.com',
                  reservationState: 'PAYMENT_SUCCESS',
                  dateTimeInfo: {
                     date: '2022.12.24',
                     time: '13:00 - 15:00 (2시간)'
                  },
                  message: '두번째 t신청자'
               }
            ],
            confirmed: [
               {
                  userId: 3,
                  nickname: 'hello world',
                  imageUrl: 'https://7357.tistory.com',
                  reservationState: 'ACCEPT',
                  email: 'abcd@gmail.com',
                  dateTimeInfo: {
                     date: '2022.12.20',
                     time: '13:00 - 15:00 (2시간)'
                  },
                  message: '열심히 참여하겠습니다.',
                  contact: '010-1234-5678'
               }
            ]
         }
      }
   ],
   pageInfo: {
      page: 1,
      size: 20,
      totalElements: 1,
      totalPages: 1
   }
};

export const host_dummyData2 = [
   {
      id: 1,
      isOpen: true,
      meetingState: '모집중',
      category: '개발',
      title: '개발 10년차가 전해 주는 멘토링',
      content:
         '멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.',
      locations: ['서초구', '강남구'],
      dateTimes: [],
      priceInfo: {
         pricePolicy: 'HOUR',
         price: 10000
      },
      applications: {
         new: [
            {
               id: 1,
               img: '',
               nickname: 'Icyeong',
               dateInfo: {
                  date: '2022.12.26',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '제가 코딩한게 있는데 보여드면서 코드리뷰 받고 싶습니다.'
            },
            {
               id: 2,
               img: '',
               nickname: 'qqllqqll',
               dateInfo: {
                  date: '2022.12.24',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '두번째 t신청자'
            }
         ],
         confirmed: [
            {
               id: 3,
               img: '',
               nickname: 'hello world',
               dateInfo: {
                  date: '2022.12.20',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '열심히 참여하겠습니다.',
               contact: '010-1234-5678',
               email: 'abcd@gmail.com'
            }
         ]
      }
   },
   {
      id: 2,
      isOpen: false,
      meetingState: '모집종료',
      category: '회계',
      title: '회계사 경력만 10년 무엇이든 물어보세요',
      content: '회계는 어렵지 않습니다 ㅎㅎ',
      locations: ['강남구'],
      dateTimes: [],
      priceInfo: {
         pricePolicy: 'HOUR',
         price: 8000
      },
      applications: {
         confirmed: [
            {
               id: 5,
               img: '',
               nickname: 'naver',
               dateInfo: {
                  date: '2022.10.25',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '두번째 t신청자',
               contact: '010-1234-5678',
               email: 'hehe@daum.com'
            },
            {
               id: 6,
               img: '',
               nickname: 'daum',
               dateInfo: {
                  date: '2022.10.24',
                  time: '13:00 - 15:00 (2시간)'
               },
               contact: '010-1234-5678',
               email: 'hehe@daum.com'
            },
            {
               id: 6,
               img: '',
               nickname: 'google',
               dateInfo: {
                  date: '2022.10.23',
                  time: '13:00 - 15:00 (2시간)'
               },
               contact: '010-1234-5678',
               email: 'abcd@gmail.com'
            }
         ]
      }
   },
   {
      id: 3,
      isOpen: true,
      meetingState: '모집중',
      category: '교육',
      title: '영어 스터디 같이할 분들 구합니다.',
      content: '내용은 만나서 협의 (스피킹 위주)',
      locations: ['역삼역', '근처 카페'],
      dateTimes: [],
      priceInfo: {
         pricePolicy: 'HOUR',
         price: 0
      },
      applications: {
         new: [
            {
               id: 7,
               img: '',
               nickname: '영포자',
               dateInfo: {
                  date: '2022.12.30',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '꼭 필요한 스터디네요'
            },
            {
               id: 8,
               img: '',
               nickname: '영포자2',
               dateInfo: {
                  date: '2022.12.24',
                  time: '13:00 - 15:00 (2시간)'
               }
            },
            {
               id: 9,
               img: '',
               nickname: '영포자3',
               dateInfo: {
                  date: '2022.12.24',
                  time: '13:00 - 15:00 (2시간)'
               }
            }
         ],
         confirmed: [
            {
               id: 3,
               img: '',
               nickname: 'hello world',
               dateInfo: {
                  date: '2022.12.20',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '열심히 참여하겠습니다.',
               contact: '010-1234-5678',
               email: 'abcd@gmail.com'
            }
         ]
      }
   }
];

export const attendMeeting_dummyData = [
   {
      id: 4,
      isOpen: true,
      meetingState: '신청확인 대기중',
      category: '디자인',
      title: 'UX/UI의 중요성과 제대로 배우기',
      content: '웹디자인의 기초인 UI/UX에 대해 이야기하고 실제로 같이 디자인을 하며 공부해봅시다.',
      locations: ['경기도'],
      dateTimes: [],
      priceInfo: {
         pricePolicy: 'HOUR',
         price: 12000
      },
      hostInfo: {
         nickname: '홍길동'
      }
   },
   {
      id: 5,
      isOpen: true,
      meetingState: '참여 확정',
      category: '회계',
      title: '회계사 경력만 10년 무엇이든 물어보세요',
      content: '회계는 어렵지 않습니다 ㅎㅎ',
      locations: ['강남구'],
      dateTimes: [],
      priceInfo: {
         pricePolicy: 'HOUR',
         price: 8000
      },
      applications: {
         confirmed: [
            {
               id: 5,
               img: '',
               nickname: 'naver',
               dateInfo: {
                  date: '2022.10.25',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '두번째 t신청자',
               contact: '010-1234-5678',
               email: 'hehe@daum.com'
            },
            {
               id: 6,
               img: '',
               nickname: 'daum',
               dateInfo: {
                  date: '2022.10.24',
                  time: '13:00 - 15:00 (2시간)'
               },
               contact: '010-1234-5678',
               email: 'hehe@daum.com'
            },
            {
               id: 6,
               img: '',
               nickname: 'google',
               dateInfo: {
                  date: '2022.10.23',
                  time: '13:00 - 15:00 (2시간)'
               },
               contact: '010-1234-5678',
               email: 'abcd@gmail.com'
            }
         ]
      }
   },
   {
      id: 6,
      isOpen: true,
      meetingState: '모집중',
      category: '교육',
      title: '영어 스터디 같이할 분들 구합니다.',
      content: '내용은 만나서 협의 (스피킹 위주)',
      locations: ['역삼역', '근처 카페'],
      dateTimes: [],
      priceInfo: {
         pricePolicy: 'HOUR',
         price: 0
      },
      applications: {
         new: [
            {
               id: 7,
               img: '',
               nickname: '영포자',
               dateInfo: {
                  date: '2022.12.30',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '꼭 필요한 스터디네요'
            },
            {
               id: 8,
               img: '',
               nickname: '영포자2',
               dateInfo: {
                  date: '2022.12.24',
                  time: '13:00 - 15:00 (2시간)'
               }
            },
            {
               id: 9,
               img: '',
               nickname: '영포자3',
               dateInfo: {
                  date: '2022.12.24',
                  time: '13:00 - 15:00 (2시간)'
               }
            }
         ],
         confirmed: [
            {
               id: 3,
               img: '',
               nickname: 'hello world',
               dateInfo: {
                  date: '2022.12.20',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '열심히 참여하겠습니다.',
               contact: '010-1234-5678',
               email: 'abcd@gmail.com'
            }
         ]
      }
   }
];

export const mypage_dummyData = [
   {
      id: 1,
      isOpen: true,
      category: '개발',
      title: '개발 10년차가 전해 주는 멘토링',
      content:
         '멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.',
      locations: ['서초구', '강남구'],
      dateTimes: [],
      priceInfo: {
         pricePolicy: 'HOUR',
         price: 10000
      },
      notice: '전달 사항',
      applications: {
         new: [
            {
               id: 1,
               img: '',
               nickname: 'Icyeong',
               dateInfo: {
                  date: '2022.12.26',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '제가 코딩한게 있는데 보여드면서 코드리뷰 받고 싶습니다.'
            },
            {
               id: 2,
               img: '',
               nickname: 'qqllqqll',
               dateInfo: {
                  date: '2022.12.24',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '두번째 t신청자'
            }
         ],
         confirmed: [
            {
               id: 3,
               img: '',
               nickname: 'hello world',
               dateInfo: {
                  date: '2022.12.20',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '열심히 참여하겠습니다.',
               contact: '010-1234-5678',
               email: 'abcd@gmail.com'
            }
         ]
      }
   },
   {
      id: 2,
      owner: true,
      isOpen: false,
      category: '라이프스타일',
      title: '읽기를 미루고 있던 두꺼운 벽돌책 부수는 북클럽',
      content: '안녕하세요! 온라인 북클럽 Bookies의 새로운 모임 #벽돌-휴먼에 참가하실 분들을 기다리고 있습니다!',
      locations: ['강남역', '근처 스타벅스'],
      dateTimes: [],
      priceInfo: {
         pricePolicy: 'HOUR',
         price: 5000
      },
      notice: '전달 사항',
      applications: {
         new: [
            {
               id: 1,
               img: '',
               nickname: 'Icyeong',
               dateInfo: {
                  date: '2022.12.26',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '제가 코딩한게 있는데 보여드면서 코드리뷰 받고 싶습니다.'
            },
            {
               id: 2,
               img: '',
               nickname: 'qqllqqll',
               dateInfo: {
                  date: '2022.12.24',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '두번째 t신청자'
            }
         ],
         confirmed: [
            {
               id: 3,
               img: '',
               nickname: 'hello world',
               dateInfo: {
                  date: '2022.12.20',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '열심히 참여하겠습니다.',
               contact: '010-1234-5678',
               email: 'abcd@gmail.com'
            }
         ]
      }
   },
   {
      id: 3,
      owner: false,
      isReserved: true,
      category: '테스트',
      title: '모집 종료 제외만 보여주기',
      content:
         '멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.',
      locations: ['서초구', '강남구'],
      dateTimes: [],
      priceInfo: {
         pricePolicy: 'HOUR',
         price: 10000
      },
      notice: '전달 사항',
      applications: {
         new: [
            {
               id: 1,
               img: '',
               nickname: 'Icyeong',
               dateInfo: {
                  date: '2022.12.26',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '제가 코딩한게 있는데 보여드면서 코드리뷰 받고 싶습니다.'
            },
            {
               id: 2,
               img: '',
               nickname: 'qqllqqll',
               dateInfo: {
                  date: '2022.12.24',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '두번째 t신청자'
            }
         ],
         confirmed: [
            {
               id: 3,
               img: '',
               nickname: 'hello world',
               dateInfo: {
                  date: '2022.12.20',
                  time: '13:00 - 15:00 (2시간)'
               },
               message: '열심히 참여하겠습니다.',
               contact: '010-1234-5678',
               email: 'abcd@gmail.com'
            }
         ]
      }
   }
];

export const myPointInfo = [
   {
      id: 1,
      message: '‘개발자 멘토링 해드립니다’ 모임에 새로운 참가자가 있습니다.',
      date: '2022.12.22',
      status: '적립',
      priceInfo: {
         status: 'plus',
         price: 9000
      }
   },
   {
      id: 2,
      message: '‘개발자 멘토링 해드립니다’ 모임에 참여하였습니다.',
      date: '2022.12. 20',
      status: '차감',
      priceInfo: {
         status: 'minus',
         price: 9000
      }
   },
   {
      id: 3,
      message: '‘개발자 멘토링 해드립니다’ 모임 참가가 취소되었습니다.',
      date: '2022.12. 18',
      status: '적립',
      priceInfo: {
         status: 'plus',
         price: 9000
      }
   }
];

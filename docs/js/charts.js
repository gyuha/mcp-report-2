// 음주와 인간 수명 연구 프로젝트 차트 데이터 및 시각화

document.addEventListener('DOMContentLoaded', function() {
  // 차트 데이터 준비
  
  // 1. 음주량과 기대수명 영향 차트
  const lifespanCtx = document.getElementById('lifespanChart').getContext('2d');
  const lifespanChart = new Chart(lifespanCtx, {
    type: 'line',
    data: {
      labels: ['비음주', '하루 1잔 이하', '하루 2잔', '하루 3잔', '하루 4잔', '하루 5잔 이상'],
      datasets: [{
        label: '평균 기대수명 단축(년)',
        data: [0, 0.5, 1.8, 3.5, 5.7, 12.5],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: '일일 음주량에 따른 평균 기대수명 단축'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `평균 수명 단축: ${context.parsed.y}년`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '기대수명 단축(년)'
          },
          reverse: false
        },
        x: {
          title: {
            display: true,
            text: '일일 음주량'
          }
        }
      }
    }
  });
  
  // 2. 주류 유형별 건강 위험 차트
  const alcoholTypeCtx = document.getElementById('alcoholTypeChart').getContext('2d');
  const alcoholTypeChart = new Chart(alcoholTypeCtx, {
    type: 'radar',
    data: {
      labels: ['간 질환', '심혈관 질환', '암 발생', '뇌 손상', '소화기 문제', '면역 체계'],
      datasets: [
        {
          label: '증류주',
          data: [9.5, 8.0, 7.5, 7.8, 6.5, 6.0],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: '#fff',
        },
        {
          label: '맥주',
          data: [6.5, 5.0, 5.0, 4.5, 6.0, 4.0],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
        },
        {
          label: '와인',
          data: [5.5, 4.5, 5.5, 4.0, 4.0, 3.5],
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          pointBackgroundColor: 'rgba(153, 102, 255, 1)',
          pointBorderColor: '#fff',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: '주류 유형별 건강 위험도 (0-10점)'
        }
      },
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 10
        }
      }
    }
  });
  
  // 3. 성별에 따른 알코올 영향 차트
  const genderCtx = document.getElementById('genderChart').getContext('2d');
  const genderChart = new Chart(genderCtx, {
    type: 'bar',
    data: {
      labels: ['간 손상 위험', '심혈관 질환 위험', '유방암 위험', '치매 위험', '알코올 의존 위험'],
      datasets: [
        {
          label: '여성',
          data: [8.0, 7.0, 9.5, 7.5, 6.0],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: '남성',
          data: [7.0, 6.5, 0, 6.0, 8.0],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: '동일 음주량에 대한 성별 건강 위험도 (0-10점)'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '위험도 (0-10점)'
          }
        },
        x: {
          title: {
            display: true,
            text: '건강 위험 유형'
          }
        }
      }
    }
  });
  
  // 4. 알코올 관련 사망 원인 차트
  const deathCauseCtx = document.getElementById('deathCauseChart').getContext('2d');
  const deathCauseChart = new Chart(deathCauseCtx, {
    type: 'pie',
    data: {
      labels: ['간 질환', '심혈관 질환', '암', '사고/외상', '자살/폭력', '기타 원인'],
      datasets: [{
        data: [35, 20, 15, 18, 7, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: '알코올 관련 사망 원인 분포 (%)'
        },
        legend: {
          position: 'right'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.parsed}%`;
            }
          }
        }
      }
    }
  });
});
export default function TimerChallenge({ title, targerTime}) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targerTime} second{targerTime > 1 ? 's' : ''}
      </p>
      <p>
        <button>
          Start challenge
        </button>
      </p>
      <p>
        Time is running... / Timer inactive
      </p>
    </section>
  )
}

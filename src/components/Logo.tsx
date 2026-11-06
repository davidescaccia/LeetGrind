import python from '../assets/logos/python.svg'
import mysql from '../assets/logos/mysql.svg'
import javascript from '../assets/logos/javascript.svg'
import typescript from '../assets/logos/typescript.svg'
import java from '../assets/logos/java.svg'
import cplusplus from '../assets/logos/cplusplus.svg'
import c from '../assets/logos/c.svg'
import csharp from '../assets/logos/csharp.svg'
import go from '../assets/logos/go.svg'
import rust from '../assets/logos/rust.svg'
import ruby from '../assets/logos/ruby.svg'
import php from '../assets/logos/php.svg'
import scala from '../assets/logos/scala.svg'
import swift from '../assets/logos/swift.svg'
import kotlin from '../assets/logos/kotlin.svg'
import dart from '../assets/logos/dart.svg'
import racket from '../assets/logos/racket.svg'
import elixir from '../assets/logos/elixir.svg'
import erlang from '../assets/logos/erlang.svg'
import vscode from '../assets/logos/vscode.svg'
import vim from '../assets/logos/vim.svg'
import intellij from '../assets/logos/intellij.svg'
import zed from '../assets/logos/zed.svg'
import helix from '../assets/logos/helix.svg'

interface LogoDef {
  src: string
  /** Single-color logo: rendered as a mask so it follows the current text color. */
  mono?: boolean
}

export const LANGUAGE_LOGOS: Record<string, LogoDef> = {
  python: { src: python },
  python3: { src: python },
  mysql: { src: mysql },
  javascript: { src: javascript },
  typescript: { src: typescript },
  java: { src: java },
  cpp: { src: cplusplus },
  c: { src: c },
  csharp: { src: csharp },
  go: { src: go },
  rust: { src: rust, mono: true },
  ruby: { src: ruby },
  php: { src: php },
  scala: { src: scala },
  swift: { src: swift },
  kotlin: { src: kotlin },
  dart: { src: dart },
  racket: { src: racket },
  elixir: { src: elixir },
  erlang: { src: erlang },
}

export const EDITOR_LOGOS: Record<string, LogoDef> = {
  code: { src: vscode },
  zed: { src: zed, mono: true },
  vim: { src: vim },
  hx: { src: helix },
  idea: { src: intellij },
}

export function Logo({ logo, size = 20 }: { logo?: LogoDef; size?: number }) {
  if (!logo) return null

  if (logo.mono) {
    return (
      <span
        aria-hidden="true"
        className="inline-block shrink-0"
        style={{
          width: size,
          height: size,
          backgroundColor: 'currentColor',
          WebkitMask: `url("${logo.src}") center / contain no-repeat`,
          mask: `url("${logo.src}") center / contain no-repeat`
        }}
      />
    )
  }

  return (
    <img
      src={logo.src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className="shrink-0 object-contain"
      draggable={false}
    />
  )
}

# 80-20 Guide to GIT

## GIT - Fundamentals

### Remote GIT Repo (user with credit/blame) for Commit

Setup in Git Config file at three different levels

- local
- global
- system

If you are submitting to multiple repos with different user credentials then use **local** for more control. Otherwise, you can setup at the **global** or **system** level so you don't have to worry about setting each time. It's okay to have config at multiple levels because each lower level simply overrides what would be the default.

Open config file in your chosen default editor ( `-e` ) is easy modification. Level is either `[--local] | [--global] | [--system]`

**>_ command-line**
`git config --local -e`

Opens local config file in default editor.

To the top of the config file that opens add

```default
[user]
  name = over40dev
  email = ted@over40.dev
```
